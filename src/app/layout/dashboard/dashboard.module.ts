import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { dashboardRoutingModule } from './dashboard-routing.module';
import { dashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        dashboardRoutingModule,
        StatModule,
    ],
    declarations: [
        dashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class dashboardModule { }
