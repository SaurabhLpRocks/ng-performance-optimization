import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';
import { RandomService } from '../../../@core/utils/random.service';

@Component({
  selector: 'ngx-d3-advanced-pie-dashboard',
  template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3AdvancedPieDashboardComponent implements OnDestroy {
  single: any[] = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
  ];
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private randomService: RandomService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };

      setInterval(() => { this.shuffleData(); }, 3500);
    });
  }


  ngAfterViewInit() {
    this.cdr.detach();
  }

  shuffleData() {
    const promise1: Promise<any[]> = this.randomService.shuffleArray(this.single)
    const promise2: Promise<any[]> = this.randomService.shuffleArray(this.colorScheme.domain)
    const promises: Promise<any[]>[] = [promise1, promise2];

    Promise.all(promises).then((responses: any[]) => {
      this.single = responses[0];
      this.colorScheme.domain = responses[1];
      this.cdr.detectChanges();
    })
  }

  ngOnDestroy(): void {
  }
}
