import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-chartjs-dashboard',
  styleUrls: ['./chartjs.component.scss'],
  templateUrl: './chartjs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartjsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }
}
