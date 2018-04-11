import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-typography-dashboard',
  styleUrls: ['./typography.component.scss'],
  templateUrl: './typography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypographyDashboardComponent implements OnDestroy {
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService, private cdr: ChangeDetectorRef) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngAfterViewInit() {
    this.cdr.detach();
}

  ngOnDestroy() {
  }
}
