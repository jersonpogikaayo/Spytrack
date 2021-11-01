import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeMachinePage } from './time-machine.page';

const routes: Routes = [
  {
    path: '',
    component: TimeMachinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeMachinePageRoutingModule {}
