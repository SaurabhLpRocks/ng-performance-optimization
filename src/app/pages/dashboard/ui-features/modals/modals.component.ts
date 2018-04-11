import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { ModalDashboardComponent } from './modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modals-dashboard',
  styleUrls: ['./modals.component.scss'],
  templateUrl: './modals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsDashboardComponent {

  ngAfterViewInit() {
    this.cdr.detach();
  }


  constructor(private modalService: NgbModal, private cdr: ChangeDetectorRef) { }

  showLargeModal() {
    const activeModal = this.modalService.open(ModalDashboardComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Large Modal';
    this.cdr.detectChanges();
  }
  showSmallModal() {
    const activeModal = this.modalService.open(ModalDashboardComponent, { size: 'sm', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Small Modal';
    this.cdr.detectChanges();
  }

  showStaticModal() {
    const activeModal = this.modalService.open(ModalDashboardComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
                                                    this.cdr.detectChanges();
  }

}
