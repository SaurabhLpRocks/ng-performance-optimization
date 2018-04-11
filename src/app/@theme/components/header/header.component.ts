import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private cdr: ChangeDetectorRef,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private userService: UserService,
    private analyticsService: AnalyticsService) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detach();
    }, 0);
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.user = users.nick;
        this.cdr.detectChanges();
      });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.cdr.detectChanges();
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    this.cdr.detectChanges();
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
    this.cdr.detectChanges();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
    this.cdr.detectChanges();
  }
}
