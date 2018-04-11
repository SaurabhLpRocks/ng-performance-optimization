import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { WebWorkerService } from 'angular2-web-worker';

@Component({
  selector: 'ngx-chartjs-pie-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <chart type="pie" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsPieDashboardComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _webWorkerService: WebWorkerService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this._webWorkerService.run(this.createData, colors).then((data) => {
        this.data = data;
        this.cdr.detectChanges();
      });
      setInterval(() => {
        this._webWorkerService.run(this.createData, colors).then((data) => {
          this.data = data;
          this.cdr.detectChanges();
        });
      }, 4300);

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
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

  createData(colors: any) {
    return {
      labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
      datasets: [{
        data: [300, 500, 100],
        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
      }],
    };
  }
  ngOnDestroy(): void {
  }
}
