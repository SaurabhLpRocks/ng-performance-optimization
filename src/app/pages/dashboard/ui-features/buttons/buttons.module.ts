import { ActionGroupsDashboardComponent } from './action-groups/action-groups.component';
import { BlockLevelButtonsDashboardComponent } from './block-level-buttons/block-level-buttons.component';
import { ButtonGroupsDashboardComponent } from './button-groups/button-groups.component';
import { ButtonsDashboardComponent } from './buttons.component';
import { DefaultButtonsDashboardComponent } from './default-buttons/default-buttons.component';
import { DropdownButtonsDashboardComponent } from './dropdown-buttons/dropdown-button.component';
import { HeroButtonDashboardComponent } from './hero-buttons/hero-buttons.component';
import { IconButtonsDashboardComponent } from './icon-buttons/icon-buttons.component';
import { LabeledActionsGroupDashboardComponent } from './labeled-actions-group/labeled-actions-group.component';
import { NgModule } from '@angular/core';
import { ShapeButtonsDashboardComponent } from './shape-buttons/shape-buttons.component';
import { SizeButtonsDashboardComponent } from './size-buttons/size-buttons.component';
import { ThemeModule } from '../../../../@theme/theme.module';

const components = [
  // ButtonsDashboardComponent,
  // DefaultButtonsDashboardComponent,
  // HeroButtonDashboardComponent,
  // ShapeButtonsDashboardComponent,
  // SizeButtonsDashboardComponent,
  // ActionGroupsDashboardComponent,
  // DropdownButtonsDashboardComponent,
  // BlockLevelButtonsDashboardComponent,
  // ButtonGroupsDashboardComponent,
  // IconButtonsDashboardComponent,
  // LabeledActionsGroupDashboardComponent,
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
