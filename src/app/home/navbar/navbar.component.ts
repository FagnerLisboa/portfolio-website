import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavActive = false;

  toggleNav(): void {
    this.isNavActive = !this.isNavActive;
  }
}
