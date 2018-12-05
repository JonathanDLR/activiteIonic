import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CD } from '../../models/CD';
import { DataGestion } from '../../services/data-gestion.service';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {

  index: number;
  cd: CD;

  constructor(public navParams: NavParams,
              public viewController: ViewController,
              public dataGestion: DataGestion) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.dataGestion.cdList[this.index];
  }

  dismissModal() {
    this.viewController.dismiss();
  }

  onToggleCd() {
    this.dataGestion.onToggleLend(this.cd);
  }

}
