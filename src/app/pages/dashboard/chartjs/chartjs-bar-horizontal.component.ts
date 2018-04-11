import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { WebWorkerService } from 'angular2-web-worker';

@Component({
  selector: 'ngx-chartjs-bar-horizontal-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <chart type="horizontalBar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsBarHorizontalDashboardComponent implements OnDestroy {
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
        })
      }, 3500);

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
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
                display: false,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
        },
        legend: {
          position: 'right',
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


  ngOnDestroy(): void {
  }

  createData(colors: any) {
    const random: () => number = (): number => {
      return Math.round(Math.random() * 100);
    }
    return {

      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: colors.infoLight,
        borderWidth: 1,
        data: [random(), random(), random(), random(), random(), random()],
      }, {
        label: 'Dataset 2',
        backgroundColor: colors.successLight,
        data: [random(), random(), random(), random(), random(), random()],
      },
      ],
    };
  }

  private random(): number {
    return Math.round(Math.random() * 100);
  }
}
