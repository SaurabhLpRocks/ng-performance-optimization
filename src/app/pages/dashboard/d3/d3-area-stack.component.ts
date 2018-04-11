import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { RandomService } from '../../../@core/utils/random.service';

@Component({
  selector: 'ngx-d3-area-stack-dashboard',
  template: `
    <ngx-charts-area-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale">
    </ngx-charts-area-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3AreaStackDashboardComponent implements OnDestroy {
  multi = [{
    name: 'Germany',
    series: [{
      name: '2010',
      value: 7300000,
    }, {
      name: '2011',
      value: 8940000,
    }],
  }, {
    name: 'USA',
    series: [{
      name: '2010',
      value: 7870000,
    }, {
      name: '2011',
      value: 8270000,
    }],
  }, {
    name: 'France',
    series: [{
      name: '2010',
      value: 5000002,
    }, {
      name: '2011',
      value: 5800000,
    }],
  }];
  showLegend = true;
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private randomService: RandomService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
      setInterval(() => { this.shuffleData(); }, 4500);
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
