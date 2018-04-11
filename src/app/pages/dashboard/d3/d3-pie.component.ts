import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { RandomService } from '../../../@core/utils/random.service';

@Component({
  selector: 'ngx-d3-pie-dashboard',
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels">
    </ngx-charts-pie-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3PieDashboardComponent implements OnDestroy {
  results = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'France', value: 7200 },
  ];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private randomService: RandomService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
      setInterval(() => { this.shuffleData(); }, 5300);
    });
  }


  ngAfterViewInit() {
    this.cdr.detach();
  }

  shuffleData() {
    const promise1: Promise<any[]> = this.randomService.shuffleArray(this.results)
    const promise2: Promise<any[]> = this.randomService.shuffleArray(this.colorScheme.domain)
    const promises: Promise<any[]>[] = [promise1, promise2];

    Promise.all(promises).then((responses: any[]) => {
      this.results = responses[0];
      this.colorScheme.domain = responses[1];
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
  }
}
