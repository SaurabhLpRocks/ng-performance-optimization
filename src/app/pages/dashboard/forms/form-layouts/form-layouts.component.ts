import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-form-layouts-dashboard',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLayoutsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.cdr.detach();
}

}
