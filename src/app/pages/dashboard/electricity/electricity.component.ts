import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

import { ElectricityService } from '../../../@core/data/electricity.service';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-electricity',
  styleUrls: ['./electricity.component.scss'],
  templateUrl: './electricity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElectricityComponent implements OnDestroy {

  data: Array<any>;

  type = 'week';
  types = ['week', 'month', 'year'];

  currentTheme: string;
  themeSubscription: any;

  constructor(private eService: ElectricityService, private themeService: NbThemeService, private cdr: ChangeDetectorRef) {
    this.data = this.eService.getData();

    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
      setTimeout(() => {
        // this.cdr.detach();
      }, 0);
    });
  }

  ngOnDestroy() {
  }
}
