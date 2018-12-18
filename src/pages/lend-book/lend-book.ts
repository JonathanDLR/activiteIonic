import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../models/Book';
import { DataGestion } from '../../services/data-gestion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  index: number;
  book: Book;
  bookLendForm: FormGroup

  constructor(public navParams: NavParams,
              public viewController: ViewController,
              public dataGestion: DataGestion,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.dataGestion.bookList[this.index];
    this.initForm();
  }

  initForm() {
    this.bookLendForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmitForm() {
    this.book.emprunteur = this.bookLendForm.get('name').value;
    this.dataGestion.saveStorage();
  }

  dismissModal() {
    this.viewController.dismiss();
  }

  onToggleBook() {
    this.dataGestion.onToggleLend(this.book);
    this.dataGestion.saveStorage();
    this.dismissModal();
  }
}
