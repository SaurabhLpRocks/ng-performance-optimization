import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpoint, NbMediaBreakpointsService, NbThemeService } from '@nebular/theme';

import { RandomService } from '../../../@core/utils/random.service';
import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent implements OnInit, OnDestroy {

  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private userService: UserService,
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService,
    private randomService: RandomService, private cdr: ChangeDetectorRef) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [
          { user: users.nick, type: 'mobile', id: '1' },
          { user: users.eva, type: 'home', id: '2' },
          { user: users.jack, type: 'mobile', id: '3' },
          { user: users.lee, type: 'mobile', id: '4' },
          { user: users.alan, type: 'home', id: '5' },
          { user: users.kate, type: 'work', id: '6' },
        ];

        this.recent = [
          { user: users.alan, type: 'home', time: this.getDate(), id: '5' },
          { user: users.eva, type: 'home', time: this.getDate(), id: '2' },
          { user: users.nick, type: 'mobile', time: this.getDate(), id: '1' },
          { user: users.lee, type: 'mobile', time: this.getDate() },
          { user: users.jack, type: 'mobile', time: this.getDate(), id: '3' },
          { user: users.kate, type: 'work', time: this.getDate(), id: '4' },
          { user: users.kate, type: 'work', time: this.getDate(), id: '6' },
          { user: users.jack, type: 'mobile', time: this.getDate(), id: '7' },
        ];
      });
    setInterval(() => { this.getRandomContactUser(); }, 3500);
  }

  ngAfterViewInit() {
    this.cdr.detach();
  }


  getRandomContactUser() {
    this.userService.getRandomUser().subscribe((userRes: any) => {
      const user = {
        name: `${userRes.results[0].name.first} ${userRes.results[0].name.last}`,
        picture: userRes.results[0].picture.medium
      };
      const contact = { user, type: 'mobile', id: userRes.info.seed }
      this.contacts.push(contact);
      this.cdr.detectChanges();
    })
  }

  getRandomRecentUser() {
    this.userService.getRandomUser().subscribe((userRes: any) => {
      const user = {
        name: `${userRes.results[0].name.first} ${userRes.results[0].name.last}`,
        picture: userRes.results[0].picture.medium
      };

      const recent = { user, type: 'home', time: this.getDate(), id: userRes.info.seed }
      this.recent.push(recent);
    });
  }

  getDate(): string {
    return this.randomService.randomDate(new Date(2017, 0, 1), new Date()).toString();
  }
  ngOnDestroy() {
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
