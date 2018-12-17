import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AuthPage } from '../pages/auth/auth';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;
  tabsPage:any = TabsPage;
  settingsPage:any = SettingsPage;
  authPage: any = AuthPage;
  isAuth: boolean;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private menuController: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      let config = {
        apiKey: "AIzaSyCe4uM3bZbUi7pTZL-_G1QFFlJOumQFv6g",
        authDomain: "lend-a766e.firebaseapp.com",
        databaseURL: "https://lend-a766e.firebaseio.com",
        projectId: "lend-a766e",
        storageBucket: "lend-a766e.appspot.com",
        messagingSenderId: "1053677086322"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth = true;
            this.content.setRoot(TabsPage);
          } else {
            this.isAuth = false;
            this.content.setRoot(HomePage);
          }
        }
      );
    });
  }

  onNavigate(page: any, data?: {}) {
    this.content.setRoot(page, data ? data : null);
    this.menuController.close();
  }

  onDisconnect() {
    firebase.auth().signOut();
    this.menuController.close();
  }
}

