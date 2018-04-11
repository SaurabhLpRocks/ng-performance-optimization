import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { WebWorkerService } from 'angular2-web-worker';

@Component({
  selector: 'ngx-echarts-area-stack-dashboard',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EchartsAreaStackDashboardComponent implements AfterViewInit, OnDestroy {
  options: any = {};ṁ
  themeSubscription: any;

  constructor(private theme: NbThemeService, private _webWorkerService: WebWorkerService, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.cdr.detach();

    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;
      this._webWorkerService.run(this.createOptions, [colors, echarts]).then((data) => {
        this.options = data;
        this.cdr.detectChanges();
      });

    });
  }

  createOptions(args: any[]): object {
    const colors: any = args[0];
    const echarts: any = args[1];

    return {
      backgroundColor: echarts.bg,
      color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: echarts.tooltipBackgroundColor,
          },
        },
      },
      legend: {
        data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
        textStyle: {
          color: echarts.textColor,
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
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
          type: 'value',
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
          name: 'Mail marketing',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: echarts.areaOpacity } },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Affiliate advertising',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: echarts.areaOpacity } },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video ad',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: echarts.areaOpacity } },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Direct interview',
          type: 'line',
          stack: 'Total amount',
          areaStyle: { normal: { opacity: echarts.areaOpacity } },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Search engine',
          type: 'line',
          stack: 'Total amount',
          label: {
            normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          areaStyle: { normal: { opacity: echarts.areaOpacity } },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };
  }
  ngOnDestroy(): void {
  }
}
