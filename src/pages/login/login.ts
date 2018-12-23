import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeePage } from '../homee/homee';
///import { HomePage } from '../home/homee';
/** from '../hom
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  homee(){
    this.navCtrl.push(HomeePage);
  }


}
