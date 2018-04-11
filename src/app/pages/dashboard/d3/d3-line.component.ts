import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { RandomService } from '../../../@core/utils/random.service';

@Component({
  selector: 'ngx-d3-line-dashboard',
  template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3LineDashboardComponent implements OnDestroy {
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 7300,
        },
        {
          name: '2011',
          value: 8940,
        },
      ],
    },
    {
      name: 'USA',
      series: [
        {
          name: '2010',
          value: 7870,
        },
        {
          name: '2011',
          value: 8270,
        },
      ],
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 5002,
        },
        {
          name: '2011',
          value: 5800,
        },
      ],
    },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private randomService: RandomService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
      setInterval(() => { this.shuffleData(); }, 2800);
    });
  }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  shuffleData() {
    const promise1: Promise<any[]> = this.randomService.shuffleArray(this.multi)
    const promise2: Promise<any[]> = this.randomService.shuffleArray(this.colorScheme.domain)
    const promises: Promise<any[]>[] = [promise1, promise2];

    Promise.all(promises).then((responses: any[]) => {
      this.multi = responses[0];
      this.colorScheme.domain = responses[1];
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
  }
}
