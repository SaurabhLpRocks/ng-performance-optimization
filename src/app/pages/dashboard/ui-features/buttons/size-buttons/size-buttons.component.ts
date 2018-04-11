import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-size-buttons-dashboard',
  styleUrls: ['./size-buttons.component.scss'],
  templateUrl: './size-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizeButtonsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}
