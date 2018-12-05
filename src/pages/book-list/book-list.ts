import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { DataGestion } from '../../services/data-gestion.service';
import { Book } from '../../models/Book';
import { LendBookPage } from '../lend-book/lend-book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  bookList: Book[];

  constructor(private dataGestion: DataGestion,
              private menuController: MenuController,
              private modalController: ModalController) {
  }

  ionViewWillEnter() {
    this.bookList = this.dataGestion.bookList.slice();
  }

  onLoadBook(index: number) {
    let modal = this.modalController.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuController.open();
  }
}
