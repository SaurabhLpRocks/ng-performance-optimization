import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-icon-buttons-dashboard',
  styleUrls: ['./icon-buttons.component.scss'],
  templateUrl: './icon-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}
