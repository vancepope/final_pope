import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth';
@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})

export class SigninPage {
  public myStyles: Object = {showEmail: false};
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }
  //Signs user in
  onSignin(form: NgForm){
    //Displays a loading controller to user
    let loader = this.loadingCtrl.create({
      content: "Signin you in..."
    });

    //Grabs data from the form, validates it and signs user in
    this.authService.signin(form.value.email, form.value.password)
    .then(() =>{
      //Prints to console that user has now been signed in
      console.log("User is now signed in");
      loader.present();
      loader.dismiss();
    }).catch(error => {
      //Displays an alert to user if there is an error while signing in
      let err = this.alertCtrl.create({
        title: 'Error!',
        message: error,
        buttons: ['Ok']
      })
      err.present();
    });
    loader.dismiss();
  }
}
