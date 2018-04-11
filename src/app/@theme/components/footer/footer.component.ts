import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank" rel="noopener">Akveo</a></b> 2017</span>
    <div class="socials">
      <a href="#" target="_blank" rel="noopener" rel="noopener" class="ion ion-social-github"></a>
      <a href="#" target="_blank" rel="noopener" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" rel="noopener" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" rel="noopener" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.cdr.detach();
  }

}
