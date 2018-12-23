import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeliveryservicePage } from '../deliveryservice/deliveryservice';
import { ResitPage } from '../resit/resit';


/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
  template: `
    <ion-tabs>
      <ion-tab [root]="tab1" tabTitle="Current" ></ion-tab>
      <ion-tab [root]="tab2" tabTitle="History" ></ion-tab>
    </ion-tabs>`,
})
export class MyorderPage {

  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = DeliveryservicePage;
    this.tab2 = ResitPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyorderPage');
  }

}
