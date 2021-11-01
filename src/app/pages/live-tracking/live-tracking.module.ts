import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveTrackingPageRoutingModule } from './live-tracking-routing.module';

import { LiveTrackingPage } from './live-tracking.page';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveTrackingPageRoutingModule
  ],
  declarations: [
    LiveTrackingPage,
    FilterComponent
  ]
})
export class LiveTrackingPageModule {}
