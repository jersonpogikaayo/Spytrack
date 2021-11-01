import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { FilterComponent } from './filter/filter.component';

declare var google: any;

@Component({
  selector: 'app-live-tracking',
  templateUrl: './live-tracking.page.html',
  styleUrls: ['./live-tracking.page.scss'],
})
export class LiveTrackingPage implements OnInit {

  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(51.233334, 6.78333);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options)
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterComponent,
      cssClass: 'filter-modal'
    });
    return await modal.present();
  }

  redirectActivate() {
    window.open('https://spytrack.com/', '_system')
    // this.inAppBrowser.create("https://www.app.spytrack.com");
  }

}
