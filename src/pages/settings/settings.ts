import { Component } from '@angular/core';
import { MenuController, ToastController, LoadingController } from 'ionic-angular';
import { DataGestion } from '../../services/data-gestion.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public menuController: MenuController,
              private toastController: ToastController,
              private loadingController: LoadingController,
              private dataGestion: DataGestion) {
  }

  onToggleMenu() {
    this.menuController.open();
  }

  onSaveList() {
    let loaderCD = this.loadingController.create({
      content: 'Sauvegarde CD en cours'
    });
    let loaderBook = this.loadingController.create({
      content: 'Sauvegarde livres en cours'
    });
    loaderCD.present();
    this.dataGestion.saveCD().then(
      () => {
        loaderCD.dismiss();
        this.toastController.create({
          message: 'CD sauvegardés!',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loaderCD.dismiss();
        this.toastController.create({
          message: error,
          duration: 3000,
          position: 'bottom',
        }).present();
      }
    );
    loaderBook.present();
    this.dataGestion.saveBook().then(
      () => {
        loaderBook.dismiss();
        this.toastController.create({
          message: 'Livres sauvegardés!',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loaderBook.dismiss();
        this.toastController.create({
          message: error,
          duration: 3000,
          position: 'bottom',
        }).present();
      }
    );
  }

  onFetchList() {
    let loaderCD = this.loadingController.create({
      content: 'Récupération CD en cours'
    });
    let loaderBook = this.loadingController.create({
      content: 'Récupération livres en cours'
    })
    loaderCD.present();
    this.dataGestion.retrieveCD().then(
      () => {
        loaderCD.dismiss();
        this.toastController.create({
          message: 'CD récupérés!',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loaderCD.dismiss();
        this.toastController.create({
          message: error,
          duration: 3000,
          position: 'bottom',
        }).present();
      }
    );
    loaderBook.present();
    this.dataGestion.retrieveCD().then(
      () => {
        loaderBook.dismiss();
        this.toastController.create({
          message: 'Livres récupérés!',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error) => {
        loaderBook.dismiss();
        this.toastController.create({
          message: error,
          duration: 3000,
          position: 'bottom',
        }).present();
      }
    );
    this.dataGestion.saveStorage();
  }
}
