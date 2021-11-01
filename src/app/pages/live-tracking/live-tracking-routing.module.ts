import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTrackingPage } from './live-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: LiveTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTrackingPageRoutingModule {}
