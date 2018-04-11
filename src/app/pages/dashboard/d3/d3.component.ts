import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-d3-dashboard',
  styleUrls: ['./d3.component.scss'],
  templateUrl: './d3.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class D3DashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }
}
