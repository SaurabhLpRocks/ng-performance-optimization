import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { NbColorHelper, NbThemeService } from '@nebular/theme';

import { WebWorkerService } from 'angular2-web-worker';

@Component({
  selector: 'ngx-chartjs-radar-dashboard',
  template: `1
    <chart type="radar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsRadarDashboardComponent implements OnDestroy {
  options: any;
  data: {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _webWorkerService: WebWorkerService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;
      const bgColorA: string = NbColorHelper.hexToRgbA(colors.dangerLight, 0.5);
      const bgColorB: string = NbColorHelper.hexToRgbA(colors.warningLight, 0.5);

      this._webWorkerService.run(this.createData, [colors, bgColorA, bgColorB]).then((data) => {
        this.data = data;
        this.cdr.detectChanges();
      });

      setInterval(() => {
        this._webWorkerService.run(this.createData, [colors, bgColorA, bgColorB]).then((data) => {
          this.data = data;
          this.cdr.detectChanges();
        });
      }, 5000);

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scaleFontColor: 'white',
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: chartjs.textColor,
          },
          gridLines: {
            color: chartjs.axisLineColor,
          },
          angleLines: {
            color: chartjs.axisLineColor,
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
    return {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [{
        data: [65, 59, 90, 81, 56, 55, 40],
        label: 'Series A',
        borderColor: colors.danger,
        backgroundColor: bgColorA,
      }, {
        data: [28, 48, 40, 19, 96, 27, 100],
        label: 'Series B',
        borderColor: colors.warning,
        backgroundColor: bgColorB,
      }],
    };
  }
  ngOnDestroy(): void {
  }
}
