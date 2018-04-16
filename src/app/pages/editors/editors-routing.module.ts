import { RouterModule, Routes } from '@angular/router';

import { EditorsComponent } from './editors.component';
import { NgModule } from '@angular/core';
import { TinyMCEComponent } from './tiny-mce/tiny-mce.component';

const routes: Routes = [{
  path: '',
  component: EditorsComponent,
  children: [{
    path: 'tinymce',
    component: TinyMCEComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsRoutingModule { }

export const routedComponents = [
  EditorsComponent,
  TinyMCEComponent,
];
