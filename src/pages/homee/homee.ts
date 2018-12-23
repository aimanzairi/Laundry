import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Laundrylist2Page } from '../laundrylist2/laundrylist2';
import { LaundrylistPage } from '../laundrylist/laundrylist';

/**
 * Generated class for the HomeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homee',
  templateUrl: 'homee.html',
  
})

export class HomeePage {
  rootPage = HomeePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeePage');
  }

  laundrylist(){
    this.navCtrl.push(LaundrylistPage);
  }

  laundrylist2(){
    this.navCtrl.push(Laundrylist2Page);
  }

}
