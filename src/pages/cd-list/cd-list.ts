import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { CD } from '../../models/CD';
import { DataGestion } from '../../services/data-gstion.service';
import { LendCdPage } from '../lend-cd/lend-cd';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: CD[];

  constructor(private dataGestion: DataGestion,
              private menuController: MenuController,
              private modalController: ModalController) {
  }

  ionViewWillEnter() {
    this.cdList = this.dataGestion.cdList.slice();
  }

  onLoadCd(index: number) {
    let modal = this.modalController.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuController.open();
  }
}
