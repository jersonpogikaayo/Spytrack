import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'app-trackers',
  templateUrl: './trackers.component.html',
  styleUrls: ['./trackers.component.scss'],
})
export class TrackersComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    // private inAppBrowser: InAppBrowser
  ) { }

  ngOnInit() {}

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  redirectActivate() {
    window.open('https://spytrack.com/', '_system')
    // this.inAppBrowser.create("https://www.app.spytrack.com");
  }
}
