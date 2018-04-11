import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';

import { WebWorkerService } from 'angular2-web-worker';

@Component({
  selector: 'ngx-chartjs-bar-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <chart type="bar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarDashboardComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _webWorkerService: WebWorkerService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      const bgColorA: string = NbColorHelper.hexToRgbA(colors.primaryLight, 0.8);
      const bgColorB: string = NbColorHelper.hexToRgbA(colors.infoLight, 0.8);
      this._webWorkerService.run(this.createData, [colors, bgColorA, bgColorB]).then((data) => {
        this.data = data;
        this.cdr.detectChanges();
      });

      setInterval(() => {
        this._webWorkerService.run(this.createData, [colors, bgColorA, bgColorB]).then((data) => {
          this.data = data;
          this.cdr.detectChanges();
        });
      }, 4500);

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
      };
    });
  }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  createData(args: any[]) {
    const colors: any = args[0];
    const bgColorA: string = args[1];
    const bgColorB: string = args[2];
    return {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: bgColorA,
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: bgColorB,
      }],
    };
  }

  ngOnDestroy(): void {
  }
}
