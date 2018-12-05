import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../models/Book';
import { DataGestion } from '../../services/data-gestion.service';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  index: number;
  book: Book;

  constructor(public navParams: NavParams,
              public viewController: ViewController,
              public dataGestion: DataGestion) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.dataGestion.bookList[this.index];
  }

  dismissModal() {
    this.viewController.dismiss();
  }

  onToggleBook() {
    this.dataGestion.onToggleLend(this.book);
  }
}
