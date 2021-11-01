import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  defaultTrackerHistory = '0';
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log('modal')
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  selectedHistory(value: any) {
    this.defaultTrackerHistory = value;
    console.log(this.defaultTrackerHistory);
  }

}
