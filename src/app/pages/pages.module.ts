import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModules } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'

import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { IncrementerComponent } from '../components/incrementer/incrementer.component';
import { DoughnutGraphComponent } from '../components/doughnut-graph/doughnut-graph.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        IncrementerComponent,
        DoughnutGraphComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    imports: [
        SharedModules,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
})
export class PagesModule { }