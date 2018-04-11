import {
  Tab1DashboardComponent,
  Tab2DashboardComponent,
  TabsDashboardComponent
} from './ui-features/tabs/tabs.component';

import { ActionGroupsDashboardComponent } from './ui-features/buttons/action-groups/action-groups.component';
import { AgmCoreModule } from '@agm/core';
import {
  BlockLevelButtonsDashboardComponent,
} from './ui-features/buttons/block-level-buttons/block-level-buttons.component';
import { BubbleMapDashboardComponent } from './maps/bubble/bubble-map.component';
import { ButtonGroupsDashboardComponent } from './ui-features/buttons/button-groups/button-groups.component';
import { ButtonsDashboardComponent } from './ui-features/buttons/buttons.component';
import { ButtonsModule } from '../ui-features/buttons/buttons.module';
import { CKEditorDashboardComponent } from './editors/ckeditor/ckeditor.component';
import { CKEditorModule } from 'ng2-ckeditor/lib/src/ckeditor.module';
import { ChartModule } from 'angular2-chartjs';
import { ChartjsBarDashboardComponent } from './chartjs/chartjs-bar.component';
import { ChartjsBarHorizontalDashboardComponent } from './chartjs/chartjs-bar-horizontal.component';
import { ChartjsDashboardComponent } from './chartjs/chartjs.component';
import { ChartjsLineDashboardComponent } from './chartjs/chartjs-line.component';
import { ChartjsMultipleXaxisDashboardComponent } from './chartjs/chartjs-multiple-xaxis.component';
import { ChartjsPieDashboardComponent } from './chartjs/chartjs-pie.component';
import { ChartjsRadarDashboardComponent } from './chartjs/chartjs-radar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { D3AdvancedPieDashboardComponent } from './d3/d3-advanced-pie.component';
import { D3AreaStackDashboardComponent } from './d3/d3-area-stack.component';
import { D3BarDashboardComponent } from './d3/d3-bar.component';
import { D3DashboardComponent } from './d3/d3.component';
import { D3LineDashboardComponent } from './d3/d3-line.component';
import { D3PieDashboardComponent } from './d3/d3-pie.component';
import { D3PolarDashboardComponent } from './d3/d3-polar.component';
import { DashboardComponent } from './dashboard.component';
import { DefaultButtonsDashboardComponent } from './ui-features/buttons/default-buttons/default-buttons.component';
import { DropdownButtonsDashboardComponent } from './ui-features/buttons/dropdown-buttons/dropdown-button.component';
import { EchartsAreaStackDashboardComponent } from './echarts/echarts-area-stack.component';
import { EchartsBarAnimationDashboardComponent } from './echarts/echarts-bar-animation.component';
import { EchartsBarDashboardComponent } from './echarts/echarts-bar.component';
import { EchartsDashboardComponent } from './echarts/echarts.component';
import { EchartsLineDashboardComponent } from './echarts/echarts-line.component';
import { EchartsMultipleXaxisDashboardComponent } from './echarts/echarts-multiple-xaxis.component';
import { EchartsPieDashboardComponent } from './echarts/echarts-pie.component';
import { EchartsRadarDashboardComponent } from './echarts/echarts-radar.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { ElectricityComponent } from './electricity/electricity.component';
import { FormInputsDashboardComponent } from './forms/form-inputs/form-inputs.component';
import { FormLayoutsDashboardComponent } from './forms/form-layouts/form-layouts.component';
import { GmapsDashboardComponent } from './maps/gmaps/gmaps.component';
import { GridDashboardComponent } from './ui-features/grid/grid.component';
import { HeroButtonDashboardComponent } from './ui-features/buttons/hero-buttons/hero-buttons.component';
import { IconButtonsDashboardComponent } from './ui-features/buttons/icon-buttons/icon-buttons.component';
import { IconsDashboardComponent } from './ui-features/icons/icons.component';
import { KittenDashboardComponent } from './kitten/kitten.component';
import {
  LabeledActionsGroupDashboardComponent,
} from './ui-features/buttons/labeled-actions-group/labeled-actions-group.component';
import { LeafletDashboardComponent } from './maps/leaflet/leaflet.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ModalDashboardComponent } from './ui-features/modals/modal/modal.component';
import { ModalsDashboardComponent } from './ui-features/modals/modals.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NotificationsDashboardComponent } from './notifications/notifications.component';
import { PlayerComponent } from './rooms/player/player.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SearchDashboardComponent } from './ui-features/search-fields/search-fields.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
import { ShapeButtonsDashboardComponent } from './ui-features/buttons/shape-buttons/shape-buttons.component';
import { SizeButtonsDashboardComponent } from './ui-features/buttons/size-buttons/size-buttons.component';
import { SmartTableDashboardComponent } from './smart-table/smart-table.component';
import { SolarComponent } from './solar/solar.component';
import { StatusCardComponent } from './status-card/status-card.component';
import { TeamComponent } from './team/team.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { ThemeModule } from '../../@theme/theme.module';
import { TinyMCEDashboardComponent } from './editors/tiny-mce/tiny-mce.component';
import { ToasterModule } from 'angular2-toaster/src/toaster.module';
import { TrafficChartComponent } from './traffic/traffic-chart.component';
import { TrafficComponent } from './traffic/traffic.component';
import { TreeDashboardComponent } from './tree/tree.component';
import { TreeModule } from 'ng2-tree';
import { TypographyDashboardComponent } from './ui-features/typography/typography.component';
import { WeatherComponent } from './weather/weather.component';

// import { UiFeaturesComponent } from './ui-features/ui-features.component';

const chartComponents = [
  ChartjsBarDashboardComponent,
  ChartjsBarHorizontalDashboardComponent,
  ChartjsDashboardComponent,
  ChartjsLineDashboardComponent,
  ChartjsMultipleXaxisDashboardComponent,
  ChartjsPieDashboardComponent,
  ChartjsRadarDashboardComponent,
  D3AdvancedPieDashboardComponent,
  D3AreaStackDashboardComponent,
  D3BarDashboardComponent,
  D3DashboardComponent,
  D3LineDashboardComponent,
  D3PieDashboardComponent,
  D3PolarDashboardComponent,
  EchartsAreaStackDashboardComponent,
  EchartsBarAnimationDashboardComponent,
  EchartsBarDashboardComponent,
  EchartsDashboardComponent,
  EchartsLineDashboardComponent,
  EchartsMultipleXaxisDashboardComponent,
  EchartsPieDashboardComponent,
  EchartsRadarDashboardComponent,
];

const editorComponents = [
  CKEditorDashboardComponent,
  TinyMCEDashboardComponent,
]

const formsComponents = [
  FormInputsDashboardComponent,
  FormLayoutsDashboardComponent,
]

const mapComponents = [
  BubbleMapDashboardComponent,
  GmapsDashboardComponent,
  LeafletDashboardComponent,
]

const uiFeaturesComponents = [
  ActionGroupsDashboardComponent,
  BlockLevelButtonsDashboardComponent,
  ButtonGroupsDashboardComponent,
  ButtonsDashboardComponent,
  DefaultButtonsDashboardComponent,
  DropdownButtonsDashboardComponent,
  GridDashboardComponent,
  HeroButtonDashboardComponent,
  IconButtonsDashboardComponent,
  IconsDashboardComponent,
  LabeledActionsGroupDashboardComponent,
  ModalDashboardComponent,
  ModalsDashboardComponent,
  SearchDashboardComponent,
  ShapeButtonsDashboardComponent,
  SizeButtonsDashboardComponent,
  Tab1DashboardComponent,
  Tab2DashboardComponent,
  TabsDashboardComponent,
  TypographyDashboardComponent,
];

@NgModule({
  imports: [
    AgmCoreModule.forRoot(),
    ButtonsModule,
    ChartModule,
    CKEditorModule,
    LeafletModule.forRoot(),
    Ng2SmartTableModule,
    NgxChartsModule,
    NgxEchartsModule,
    ThemeModule,
    ToasterModule,
    TreeModule,
  ],
  declarations: [
    ...chartComponents,
    ...editorComponents,
    ...formsComponents,
    ...mapComponents,
    ...uiFeaturesComponents,
    ContactsComponent,
    DashboardComponent,
    ElectricityChartComponent,
    ElectricityComponent,
    KittenDashboardComponent,
    NotificationsDashboardComponent,
    PlayerComponent,
    RoomsComponent,
    RoomSelectorComponent,
    SecurityCamerasComponent,
    SmartTableDashboardComponent,
    SolarComponent,
    StatusCardComponent,
    TeamComponent,
    TemperatureComponent,
    TemperatureDraggerComponent,
    TrafficChartComponent,
    TrafficComponent,
    TreeDashboardComponent,
    WeatherComponent,
  ],
  entryComponents: [
    ModalDashboardComponent,
  ]
})
export class DashboardModule { }
