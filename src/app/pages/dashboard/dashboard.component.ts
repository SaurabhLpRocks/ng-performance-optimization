import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {

    // setTimeout(() => {
    //   this.cdr.detach();
    // }, 0);
  }

}
