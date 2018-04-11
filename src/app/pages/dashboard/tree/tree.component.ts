import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'ngx-tree-dashboard',
  templateUrl: './tree.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeDashboardComponent {
  constructor(private cdr: ChangeDetectorRef){}

  ngAfterViewInit() {
    this.cdr.detach();
}

  tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [{
      value: 'Object-oriented programming',
      children: [{
        value: 'Java',
      }, {
        value: 'C++',
      }, {
        value: 'C#',
      }],
    }, {
      value: 'Prototype-based programming',
      children: [{
        value: 'JavaScript',
      }, {
        value: 'CoffeeScript',
      }, {
        value: 'Lua',
      }],
    }],
  };

}
