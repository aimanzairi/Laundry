import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AcceptRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accept-request',
  templateUrl: 'accept-request.html',
})
export class AcceptRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptRequestPage');
  }
  doAlert() {
    const alert = this.alertCtrl.create({
      title: 'Thankyou!',
      subTitle: 'You just accept from Hamdan!',
      buttons: ['OK']
    });
    alert.present();
  }
}
