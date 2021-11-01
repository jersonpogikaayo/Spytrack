import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.page.html',
  styleUrls: ['./activities.page.scss'],
})
export class ActivitiesPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterComponent,
      cssClass: 'filter-modal'
    });
    return await modal.present();
  }

}
