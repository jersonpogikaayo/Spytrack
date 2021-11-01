import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirectChat() {
    window.open('https://spytrack.com/contact/', '_system')
  }

  redirectMessage() {
    window.open('https://spytrack.com/contact/', '_system')
  }

  redirectHelp() {
    window.open('https://spytrack.com/contact/', '_system')
  }

}
