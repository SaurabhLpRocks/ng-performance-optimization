import { ActionGroupsComponent } from './action-groups/action-groups.component';
import { BlockLevelButtonsComponent } from './block-level-buttons/block-level-buttons.component';
import { ButtonGroupsComponent } from './button-groups/button-groups.component';
import { ButtonsComponent } from './buttons.component';
import { DefaultButtonsComponent } from './default-buttons/default-buttons.component';
import { DropdownButtonsComponent } from './dropdown-buttons/dropdown-button.component';
import { HeroButtonComponent } from './hero-buttons/hero-buttons.component';
import { IconButtonsComponent } from './icon-buttons/icon-buttons.component';
import { LabeledActionsGroupComponent } from './labeled-actions-group/labeled-actions-group.component';
import { NgModule } from '@angular/core';
import { ShapeButtonsComponent } from './shape-buttons/shape-buttons.component';
import { SizeButtonsComponent } from './size-buttons/size-buttons.component';
import { ThemeModule } from '../../../@theme/theme.module';

const components = [
  ButtonsComponent,
  DefaultButtonsComponent,
  HeroButtonComponent,
  ShapeButtonsComponent,
  SizeButtonsComponent,
  ActionGroupsComponent,
  DropdownButtonsComponent,
  BlockLevelButtonsComponent,
  ButtonGroupsComponent,
  IconButtonsComponent,
  LabeledActionsGroupComponent,
];

@NgModule({
  imports: [
    ThemeModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class ButtonsModule { }
