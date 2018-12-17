import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CD } from '../../models/CD';
import { DataGestion } from '../../services/data-gestion.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {

  index: number;
  cd: CD;
  cdLendForm: FormGroup;

  constructor(public navParams: NavParams,
              public viewController: ViewController,
              public dataGestion: DataGestion,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.dataGestion.cdList[this.index];
    this.initForm();
  }

  initForm() {
    this.cdLendForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmitForm() {
    this.cd.emprunteur = this.cdLendForm.get('name').value;
  }

  dismissModal() {
    this.viewController.dismiss();
  }

  onToggleCd() {
    this.dataGestion.onToggleLend(this.cd);
  }

}
