import { Component, OnDestroy } from '@angular/core';

import { FactorialService } from '../../../@core/data/factorial.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnDestroy {
  items = [];

  computingFactorials: boolean = false;
  firstFactorial: number = 40;
  numberOfFactorials: number = 100;

  temperature = 0;
  temperatureOff = false;
  temperatureMode = 'cool';

  humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private factorialService: FactorialService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }


  ngAfterViewInit() {
    setTimeout(() => {
      this.computeFactorials();
    }, 0)
  }

  ngOnDestroy() {
  }

  public computeFactorials() {
    // clear list, reset progress indicator and show progress bar
    this.items = [];
    this.temperature = 0;

    this.factorialService.computeFactorials(this.firstFactorial, this.numberOfFactorials)
      .subscribe((res: any) => {
        this.temperature += 100.0 / this.numberOfFactorials;

      }, (err) => {

      });

  }



  public cleanResults() {
    this.items = [];
    this.temperature = 0;
  }

}
