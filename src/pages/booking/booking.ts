import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookedPage } from '../booked/booked';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public event = {
    month: '',
    timeStarts: '',
    dateEnds: '',
    timeEnds: '',
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

  booked(){
    this.navCtrl.push(BookedPage);
  }

}
