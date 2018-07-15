import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }
  //Registers user
  onSignup(form: NgForm){
    //Displays to user after click event
    let loader = this.loadingCtrl.create({
      content: "Signin you up..."
    });
    //Displays alert to user
    let alert = this.alertCtrl.create({
      title: 'Error!',
      message: 'Email is already in use.',
      buttons: ['Ok']
    });
    //Displays alert to user
    let alert2 = this.alertCtrl.create({
      title: 'Error!',
      message: 'Error creating user.',
      buttons: ['Ok']
    });
    loader.present();

    //Grabs data from form and validates it
    this.authService.signup(form.value.email,form.value.password)
    .then(data => {
      //Prints data to console
      console.log(data);
      loader.dismiss();
    }).catch(e => {
      loader.dismiss();
      console.log(e);
        if (e.code == 'auth/email-already-in-use'){
          //Displayed after user tries to register with an email that is already in use
          alert.present();
        } else{
          //Covers all other errors not related to email in use
          alert2.present();
        }
    });
  }
}
