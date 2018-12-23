import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RunnerhomePage } from '../runnerhome/runnerhome';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }
  home(){
    this.navCtrl.push(HomePage);
  }
  runnerhome(){
    this.navCtrl.push(RunnerhomePage);
  }

}
