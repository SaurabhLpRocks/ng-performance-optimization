import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal-dashboard',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ modalContent }}
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">Save changes</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalDashboardComponent {

  modalHeader: string;
  modalContent = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`;



  ngAfterViewInit() {
    this.cdr.detach();
  }

  constructor(private activeModal: NgbActiveModal, private cdr: ChangeDetectorRef) { }

  closeModal() {
    this.activeModal.close();
    this.cdr.detectChanges();
  }
}
