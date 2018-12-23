import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the RequestdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requestdetails',
  templateUrl: 'requestdetails.html',
})
export class RequestdetailsPage {

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
 
  }
  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestdetailsPage');
  }

}
