import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showBox: boolean = false;
  showMenu: boolean = false;

  toggleSearchBox() {
    this.showBox = !this.showBox;
  }

  toggleDropdown() {
    this.showMenu = !this.showMenu;
  }
}
