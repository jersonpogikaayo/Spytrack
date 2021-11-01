import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

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
