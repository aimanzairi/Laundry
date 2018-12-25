import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { FirstPage } from '../first/first';

/**
 * Generated class for the SignoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signout',
  templateUrl: 'signout.html',
})
export class SignoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
    this.signoutnow();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignoutPage');
  }

  signoutnow(){
    this.auth.signOut();
    this.navCtrl.setRoot(FirstPage);
  }

}
