package com.ge.imaging.authentication.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ge.imaging.authentication.user.ApplicationUser;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.ge.imaging.authentication.security.SecurityConstants.EXPIRATION_TIME;
import static com.ge.imaging.authentication.security.SecurityConstants.HEADER_STRING;
import static com.ge.imaging.authentication.security.SecurityConstants.SECRET;
import static com.ge.imaging.authentication.security.SecurityConstants.TOKEN_PREFIX;
import static com.ge.imaging.authentication.security.SecurityConstants.ACCESS_TOKEN_COOKIE;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
	private AuthenticationManager authenticationManager;

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		this.authenticationManager = authenticationManager;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest req,
												HttpServletResponse res) throws AuthenticationException {
		try {
			ApplicationUser creds = new ObjectMapper()
                    .readValue(req.getInputStream(), ApplicationUser.class);

			return authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
							creds.getName(),
							creds.getPassword(),
							new ArrayList<>())
			);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	protected void successfulAuthentication(HttpServletRequest req,
											HttpServletResponse res,
											FilterChain chain,
											Authentication auth) throws IOException, ServletException {

		String token = Jwts.builder()
				.setSubject(((User) auth.getPrincipal()).getUsername())
				.setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
				.signWith(SignatureAlgorithm.HS512, SECRET.getBytes())
				.compact();
		// TOKEN_PREFIX adds Bearer
		//res.addHeader(HEADER_STRING, TOKEN_PREFIX + token);
		res.addHeader(HEADER_STRING, token);
		//Cookie to be removed
		Cookie jwtCookie = new Cookie(ACCESS_TOKEN_COOKIE, token);
		jwtCookie.setHttpOnly(true);
		jwtCookie.setPath("/");
		jwtCookie.setMaxAge(5*60); // 5 minutes
		res.addCookie(jwtCookie);
	}
}
