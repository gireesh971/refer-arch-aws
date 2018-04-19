import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Config } from './config';

@Injectable()
export class ConfigService {
    private configUrl = '/api/go-service/health'

    constructor(private http: HttpClient) { }

    getConfig() : Observable<Config> {
        return this.http.get<Config>(this.configUrl,
            {
                headers: new HttpHeaders({
                    'Authorization':  'Bearer sometoken',
                })
            });
    }
}
