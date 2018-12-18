import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { CD } from '../../models/CD';
import { DataGestion } from '../../services/data-gestion.service';
import { LendCdPage } from '../lend-cd/lend-cd';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage implements OnInit, OnDestroy {

  cdList: CD[];
  cdSubscription: Subscription;

  constructor(private dataGestion: DataGestion,
              private menuController: MenuController,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.cdSubscription = this.dataGestion.cdList$.subscribe(
      (cd: CD[]) => {
        this.cdList = cd.slice();
      }
    );
    this.dataGestion.emitCD();  
  }

  onLoadCd(index: number) {
    let modal = this.modalController.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuController.open();
  }

  ngOnDestroy() {
    this.cdSubscription.unsubscribe();
  }
}
