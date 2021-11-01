import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePage = 'live-tracking';
  constructor(private router: Router) {
    this.router.navigate(['/live-tracking']);
  }

  selectedPage(data) {
    this.activePage = data;
  }
  
  logout() {
    this.router.navigate(['/login']);
  }
}
