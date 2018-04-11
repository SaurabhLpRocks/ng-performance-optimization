import './ckeditor.loader';
import 'ckeditor';

import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-ckeditor-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nb-card>
      <nb-card-header>
        CKEditor
      </nb-card-header>
      <nb-card-body>
        <ckeditor [config]="{ extraPlugins: 'divarea', height: '320' }"></ckeditor>
      </nb-card-body>
    </nb-card>
  `,
})
export class CKEditorDashboardComponent {
  constructor(private cdr: ChangeDetectorRef) { }


  ngAfterViewInit() {
    this.cdr.detach();
  }
}
