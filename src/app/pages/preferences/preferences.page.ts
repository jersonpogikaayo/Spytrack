import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { EditAccountComponent } from './modals/edit-account/edit-account.component';
import { AlertNotificationComponent } from './modals/alert-notification/alert-notification.component';
import { SettingsComponent } from './modals/settings/settings.component';
import { UsersComponent } from './modals/users/users.component';
import { TrackersComponent } from './modals/trackers/trackers.component';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async openEditAccountModal() {
    const modal = await this.modalController.create({
      component: EditAccountComponent,
      cssClass: 'filter-modal'
    });
    return await modal.present();
  }

  async openEditAlertNotificationModal() {
    const modal = await this.modalController.create({
      component: AlertNotificationComponent,
      cssClass: 'filter-modal'
    });
    return await modal.present();
  }

  async openEditSettingModal() {
    const modal = await this.modalController.create({
      component: SettingsComponent,
      cssClass: 'filter-modal'
    });
    return await modal.present();
  }

  async openEditUsersModal() {
    const modal = await this.modalController.create({
      component: UsersComponent,
      cssClass: 'filter-modal'
    });
    return await modal.present();
  }

  async openEditTrackersModal() {
    const modal = await this.modalController.create({
      component: TrackersComponent,
      cssClass: 'filter-modal'
    });
    return await modal.present();
  }

}
