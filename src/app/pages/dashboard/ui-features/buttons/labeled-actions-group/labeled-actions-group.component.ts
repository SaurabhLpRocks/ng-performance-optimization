import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-labeled-actions-group-dashboard',
  styleUrls: ['./labeled-actions-group.component.scss'],
  templateUrl: './labeled-actions-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabeledActionsGroupDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}
