import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { StateService } from '../../../@core/data/state.service';

@Component({
  selector: 'ngx-theme-settings',
  styleUrls: ['./theme-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h6>LAYOUTS</h6>
    <div class="settings-row">
      <a *ngFor="let layout of layouts"
         href="#"
         [class.selected]="layout.selected"
         [attr.title]="layout.name"
         (click)="layoutSelect(layout)">
        <i [attr.class]="layout.icon"></i>
      </a>
    </div>
    <h6>SIDEBAR</h6>
    <div class="settings-row">
      <a *ngFor="let sidebar of sidebars"
         href="#"
         [class.selected]="sidebar.selected"
         [attr.title]="sidebar.name"
         (click)="sidebarSelect(sidebar)">
        <i [attr.class]="sidebar.icon"></i>
      </a>
    </div>
  `,
})
export class ThemeSettingsComponent {

  layouts = [];
  sidebars = [];

  constructor(protected stateService: StateService, private cdr: ChangeDetectorRef) {
    this.stateService.getLayoutStates()
      .subscribe((layouts: any[]) => this.layouts = layouts);

    this.stateService.getSidebarStates()
      .subscribe((sidebars: any[]) => this.sidebars = sidebars);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detach();
    }, 0);
  }



  layoutSelect(layout: any): boolean {
    this.layouts = this.layouts.map((l: any) => {
      l.selected = false;
      return l;
    });

    layout.selected = true;
    this.stateService.setLayoutState(layout);
    this.cdr.detectChanges();
    return false;
  }

  sidebarSelect(sidebars: any): boolean {
    this.sidebars = this.sidebars.map((s: any) => {
      s.selected = false;
      return s;
    });

    sidebars.selected = true;
    this.stateService.setSidebarState(sidebars);
    this.cdr.detectChanges();
    return false;
  }
}
