import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { WebWorkerService } from 'angular2-web-worker';

@Component({
  selector: 'ngx-echarts-bar-animation-dashboard',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EchartsBarAnimationDashboardComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _webWorkerService: WebWorkerService, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.cdr.detach();
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const xAxisData = [];
      const data1 = [];
      const data2 = [];

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this._webWorkerService.run(this.createData).then((data) => {
        const xAxisData = data.xAxisData;
        const data1 = data.data1;
        const data2 = data.data2;


        this.options = {
          backgroundColor: echarts.bg,
          color: [colors.primaryLight, colors.infoLight],
          legend: {
            data: ['bar', 'bar2'],
            align: 'left',
            textStyle: {
              color: echarts.textColor,
            },
          },
          xAxis: [
            {
              data: xAxisData,
              silent: false,
              axisTick: {
                alignWithLabel: true,
              },
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          yAxis: [
            {
              axisLine: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
              splitLine: {
                lineStyle: {
                  color: echarts.splitLineColor,
                },
              },
              axisLabel: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
          ],
          series: [
            {
              name: 'bar',
              type: 'bar',
              data: data1,
              animationDelay: function (idx) {
                return idx * 10;
              },
            },
            {
              name: 'bar2',
              type: 'bar',
              data: data2,
              animationDelay: function (idx) {
                return idx * 10 + 100;
              },
            },
          ],
          animationEasing: 'elasticOut',
          animationDelayUpdate: function (idx) {
            return idx * 5;
          },
        };

        this.cdr.detectChanges();
      });



    });
  }

  createData() {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('Category ' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    return {
      xAxisData,
      data1,
      data2
    }
  }

  ngOnDestroy(): void {
  }
}
