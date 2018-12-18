import { Component, OnInit } from '@angular/core';
import { CdListPage } from '../cd-list/cd-list'
import { BookListPage } from '../book-list/book-list';
import { DataGestion } from '../../services/data-gestion.service';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit {
  cdListPage = CdListPage;
  bookListPage = BookListPage;

  constructor(private dataGestion: DataGestion) {}

  ngOnInit() {
    this.dataGestion.fetchStorage();
  }
}
