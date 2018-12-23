import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcceptRequestPage } from '../accept-request/accept-request';
import { ComissionPage } from '../comission/comission';

/**
 * Generated class for the RunnerhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-runnerhome',
  templateUrl: 'runnerhome.html',
  template: `
  <ion-tabs>
    <ion-tab [root]="tab1" tabTitle="List Requester" ></ion-tab>
    <ion-tab [root]="tab2" tabTitle="Commision" ></ion-tab>
  </ion-tabs>`,
})
export class RunnerhomePage {
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = AcceptRequestPage;
    this.tab2 = ComissionPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunnerhomePage');
  }

}
