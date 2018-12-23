import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Calendar1Page } from '../calendar1/calendar1';
/**
 * Generated class for the Laundrylist2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laundrylist2',
  templateUrl: 'laundrylist2.html',
})
export class Laundrylist2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Laundrylist2Page');
  }

  calendar1(){
    this.navCtrl.push(Calendar1Page);
  }


}
