import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { DataGestion } from '../../services/data-gestion.service';
import { Book } from '../../models/Book';
import { LendBookPage } from '../lend-book/lend-book';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage implements OnInit, OnDestroy {

  bookList: Book[];
  bookSubscription: Subscription;

  constructor(private dataGestion: DataGestion,
              private menuController: MenuController,
              private modalController: ModalController) {
  }

  ngOnInit() {
    this.bookSubscription = this.dataGestion.bookList$.subscribe(
      (book: Book[]) => {
        this.bookList = book.slice();
      }
    );
    this.dataGestion.emitBook();
  }

  onLoadBook(index: number) {
    let modal = this.modalController.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuController.open();
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }
}
