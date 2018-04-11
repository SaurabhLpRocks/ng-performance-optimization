import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-tab1-dashboard',
  template: `
    <p>Early home automation began with labor-saving machines. Self-contained electric or gas powered
      <a target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/Home_appliances">home appliances</a>
      became viable in the 1900s with the introduction of
      <a target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/Electric_power_distribution">electric power distribution
      </a> and led to the introduction of washing machines (1904), water heaters (1889), refrigerators, sewing machines,
      dishwashers, and clothes dryers.
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab1DashboardComponent {

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}

@Component({
  selector: 'ngx-tab2-dashboard',
  template: `
    <p>Tab 2 works!</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab2DashboardComponent {

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}

@Component({
  selector: 'ngx-tabs-dashboard',
  styleUrls: ['./tabs.component.scss'],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsDashboardComponent {

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  forceChangeDetection() {
    this.cdr.detectChanges();
  }

  tabs: any[] = [
    {
      title: 'Route tab #1',
      route: '/pages/ui-features/tabs/tab1',
    },
    {
      title: 'Route tab #2',
      route: '/pages/ui-features/tabs/tab2',
    },
  ];

}
