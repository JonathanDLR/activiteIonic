import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthPage } from '../auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  authPage: any = AuthPage;

  constructor(public navController: NavController) {}

    onNavigate(page: any, data?: {}) {
    this.navController.push(page, data);
  }
}
