import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-action-groups-dashboard',
  styleUrls: ['./action-groups.component.scss'],
  templateUrl: './action-groups.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionGroupsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}
