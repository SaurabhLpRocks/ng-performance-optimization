import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-echarts-dashboard',
  styleUrls: ['./echarts.component.scss'],
  templateUrl: './echarts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EchartsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }


  ngAfterViewInit() {
    this.cdr.detach();
  }
}
