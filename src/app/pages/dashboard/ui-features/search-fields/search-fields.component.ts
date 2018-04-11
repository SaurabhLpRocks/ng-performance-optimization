import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'ngx-search-fields-dashboard',
    templateUrl: 'search-fields.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDashboardComponent {
    constructor(private cdr: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.cdr.detach();
    }

    forceChangeDetection() {
        this.cdr.detectChanges();
    }

}
