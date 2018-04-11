import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-kitten-dashboard',
  styleUrls: ['./kitten.component.scss'],
  templateUrl: './kitten.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KittenDashboardComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: any;

  constructor(private themeService: NbThemeService, private cdr: ChangeDetectorRef) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngAfterViewInit() {
    this.cdr.detach();
}

  ngOnDestroy() {
  }
}
