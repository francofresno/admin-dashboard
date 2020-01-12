import { NgModule } from '@angular/core';

import { SharedModules } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';

@NgModule({
    declarations: [
        PagesComponent,       
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component
    ],
    imports: [
        SharedModules
    ],
  })
  export class PagesModule { }