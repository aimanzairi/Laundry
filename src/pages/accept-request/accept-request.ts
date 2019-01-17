import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase/app';
import { LaundryService } from '../../services/laundry.service';
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
  requestlist;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public laundry: LaundryService) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad AcceptRequestPage');
    this.requestlist = this.laundry.listrequest();
    console.log(this.requestlist);
   
  }

  doAlert() {
    const alert = this.alertCtrl.create({
      title: 'Thankyou!',
      subTitle: 'You have accept from Amir !',
      buttons: ['OK']
    });
    alert.present();
  }
}
