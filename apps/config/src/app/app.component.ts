import { Component, OnInit } from '@angular/core';
import { Config } from './config';
import { ConfigService } from './config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Welcome to sample application 2 - config';
    myConfig : Config = {
        Status: "waiting",
        InstanceId: "waiting",
        ConfiguredValue: "waiting"
    };

    constructor(private configService: ConfigService) { }

    ngOnInit() {
        this.getConfig();
    }

    getConfig(): void {
        this.configService.getConfig()
            .subscribe(config => this.myConfig = config);
    }
}
