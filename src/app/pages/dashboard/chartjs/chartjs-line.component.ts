import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';

import { WebWorkerService } from 'angular2-web-worker';

@Component({
  selector: 'ngx-chartjs-line-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsLineDashboardComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _webWorkerService: WebWorkerService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      const bgColorA: string = NbColorHelper.hexToRgbA(colors.primary, 0.3);
      const bgColorB: string = NbColorHelper.hexToRgbA(colors.danger, 0.3);
      const bgColorC: string = NbColorHelper.hexToRgbA(colors.info, 0.3);
      this._webWorkerService.run(this.createData, [colors, bgColorA, bgColorB, bgColorC]).then((data) => {
        this.data = data;
        this.cdr.detectChanges();
      });

      setInterval(() => {
        this._webWorkerService.run(this.createData, [colors, bgColorA, bgColorB, bgColorC]).then((data) => {
          this.data = data;
          this.cdr.detectChanges();
        });
      }, 3200);

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
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
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
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
    const bgColorC: string = args[3];
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: bgColorA,
        borderColor: colors.primary,
      }, {
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: bgColorB,
        borderColor: colors.danger,
      }, {
        data: [18, 48, 77, 9, 100, 27, 40],
        label: 'Series C',
        backgroundColor: bgColorC,
        borderColor: colors.info,
      },
      ],
    };
  }

  ngOnDestroy(): void {
  }
}
