import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { WebWorkerService } from 'angular2-web-worker';

@Component({
  selector: 'ngx-chartjs-multiple-xaxis-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsMultipleXaxisDashboardComponent implements OnDestroy {
  data: {};
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
      }, 4060);

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          labels: {
            fontColor: chartjs.textColor,
          },
        },
        hover: {
          mode: 'index',
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
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
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value',
              },
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
  ngOnDestroy(): void {
  }

  createData(colors: any) {
    const random: () => number = (): number => {
      return Math.round(Math.random() * 100);
    }

    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'dataset - big points',
        data: [random(), random(), random(), random(), random(), random()],
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'dataset - individual point sizes',
        data: [random(), random(), random(), random(), random(), random()],
        borderColor: colors.dangerLight,
        backgroundColor: colors.dangerLight,
        fill: false,
        borderDash: [5, 5],
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'dataset - large pointHoverRadius',
        data: [random(), random(), random(), random(), random(), random()],
        borderColor: colors.info,
        backgroundColor: colors.info,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }, {
        label: 'dataset - large pointHitRadius',
        data: [random(), random(), random(), random(), random(), random()],
        borderColor: colors.success,
        backgroundColor: colors.success,
        fill: false,
        pointRadius: 8,
        pointHoverRadius: 10,
      }],
    };
  }

  private random() {
    return Math.round(Math.random() * 100);
  }
}
