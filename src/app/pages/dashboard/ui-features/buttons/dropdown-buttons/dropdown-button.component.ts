import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-dropdown-buttons-dashboard',
  styleUrls: ['./dropdown-button.component.scss'],
  templateUrl: './dropdown-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DropdownButtonsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  forceChangeDetection() {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 0);
  }

}
