import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-shape-buttons-dashboard',
  styleUrls: ['./shape-buttons.component.scss'],
  templateUrl: './shape-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShapeButtonsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}
