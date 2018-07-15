import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { AuthService } from '../services/auth';
import { SigninPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  signinPage = SigninPage;
  registerPage = RegisterPage;
  tabsPage = this.rootPage;
  isAuthenticated: boolean = false;
  @ViewChild('nav') nav: NavController;
  constructor(private menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyAIPw2V5m-GANJLnn8PadnSAGbn6k51QjU",
      authDomain: "finalproject-fed4a.firebaseapp.com"
    });

    //Authenticates user input using Firebase
    firebase.auth().onAuthStateChanged( user =>{
      if (user){
        //If user is authenticated, sets rootPage to TabsPage
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
      } else {
        //If user input is not authenticated, rootPage remains set as SigninPage
        this.isAuthenticated = false;
        this.rootPage = SigninPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  //Loads page and closes menu
  onLoad(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  //Logs user out and closes menu
  onLogout(){
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}
