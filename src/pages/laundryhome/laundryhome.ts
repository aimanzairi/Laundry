import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ComissionPage } from '../comission/comission';
import { AcceptRequestPageModule } from '../accept-request/accept-request.module';
import { AcceptRequestPage } from '../accept-request/accept-request';
import { HomeePage } from '../homee/homee';

/**
 * Generated class for the LaundryhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laundryhome',
  templateUrl: 'laundryhome.html',
  template: `
  <ion-tabs>
    <ion-tab [root]="tab1" tabTitle="Booking Slot" ></ion-tab>
    <ion-tab [root]="tab2" tabTitle="Requester" ></ion-tab>
    <ion-tab [root]="tab3" tabTitle="Runner" ></ion-tab>
  </ion-tabs>`,
})
export class LaundryhomePage {

  tab1: any;
  tab2: any;
  tab3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomeePage;
    this.tab2 = AcceptRequestPage;
    this.tab3 = ComissionPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaundryhomePage');
  }
  

}
