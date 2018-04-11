import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-block-level-buttons-dashboard',
  templateUrl: './block-level-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockLevelButtonsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}
