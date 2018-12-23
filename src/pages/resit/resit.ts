import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestdetailsPage } from '../requestdetails/requestdetails';

/**
 * Generated class for the ResitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resit',
  templateUrl: 'resit.html',
})
export class ResitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResitPage');
  }

  requestdetails(){
    this.navCtrl.push(RequestdetailsPage);
  }

}
