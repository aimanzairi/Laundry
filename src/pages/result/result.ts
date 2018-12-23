import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeePage } from '../homee/homee';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  eventData:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.eventData = localStorage.getItem('EventData');
  }

  ionViewWillLoad() {
   
  }

  homee(){
    this.navCtrl.push(HomeePage);
  }


}
