import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public menuController: MenuController) {
  }

  onToggleMenu() {
    this.menuController.open();
  }
}
