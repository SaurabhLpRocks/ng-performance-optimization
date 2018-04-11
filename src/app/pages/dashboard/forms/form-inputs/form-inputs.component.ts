import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-form-inputs-dashboard',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputsDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }


  ngAfterViewInit() {
    this.cdr.detach();
  }

  starRate = 2;
  heartRate = 4;
}
