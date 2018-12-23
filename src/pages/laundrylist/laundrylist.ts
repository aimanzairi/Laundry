import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RequestdetailsPage } from '../requestdetails/requestdetails';

/**
 * Generated class for the LaundrylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laundrylist',
  templateUrl: 'laundrylist.html',
})
export class LaundrylistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaundrylistPage');
  }
  requestdetails(){
    this.navCtrl.push(RequestdetailsPage);
  }

}
