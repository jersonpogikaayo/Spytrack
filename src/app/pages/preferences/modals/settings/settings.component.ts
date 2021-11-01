import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { timeZones } from './time-zones';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  animals: string[] = ["Tiger", "Lion", "Elephant", "Fox", "Wolf"];
  selectedTimeZone = 'US/Eastern'
  allTimeZones:any = timeZones;
  constructor(
    public modalController: ModalController,
    private pickerController: PickerController
  ) { }

  ngOnInit() {}

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            console.log(value);
            this.selectedTimeZone = value.Timezones.text;
          }
        }
      ],
      columns:[{
        name:'Timezones',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    this.allTimeZones.forEach(x => {
      options.push({
        text:x.offset + ' ' + x.name,value:x.offset
      });
    });
    return options;
  }
}
