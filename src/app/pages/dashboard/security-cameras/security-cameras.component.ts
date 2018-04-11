import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-security-cameras',
  styleUrls: ['./security-cameras.component.scss'],
  templateUrl: './security-cameras.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecurityCamerasComponent {


  cameras: any[];

  selectedCamera: any;

  userMenu

  isSingleView;

  constructor(private cdr: ChangeDetectorRef) {
    this.cameras = [{
      title: 'Camera #1',
      source: 'assets/images/camera1.jpg',
    }, {
      title: 'Camera #2',
      source: 'assets/images/camera2.jpg',
    }, {
      title: 'Camera #3',
      source: 'assets/images/camera3.jpg',
    }, {
      title: 'Camera #4',
      source: 'assets/images/camera4.jpg',
    }];

    this.selectedCamera = this.cameras[0];
    this.userMenu = [{
      title: 'Profile',
    }, {
      title: 'Log out',
    }];

    this.isSingleView = false;

  }

  ngAfterViewInit() {


    // this.cdr.detectChanges();
    this.cdr.detach();
  }


  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = true;
    this.cdr.detectChanges();

  }

  setleSingleView() {
    this.isSingleView = true;
    this.cdr.detectChanges();
  }

  setMultiView(){
    this.isSingleView = false;
    this.cdr.detectChanges();
  }
}
