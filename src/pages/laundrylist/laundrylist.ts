import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RequestdetailsPage } from '../requestdetails/requestdetails';
import { LaundryService } from '../../services/laundry.service';

/**
 * Generated class for the LaundrylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laundrylist',
  templateUrl: 'laundrylist.html',
})
export class LaundrylistPage {
  testCheckboxOpen: any;
  testCheckboxResult: any;
  laundrylists;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public laundry: LaundryService) {
  }

  ionViewCanEnter() {
    console.log('ionViewDidLoad LaundrylistPage');
    this.laundrylists = this.laundry.listlaundry();
    console.log(this.laundrylists);

  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('You want us to ?');

    alert.addInput({
      type: 'checkbox',
      label: 'Pick up',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Return',
      value: 'value2'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text : 'Okay',
      handler: RequestdetailsPage => {
        console.log('Checkbox data:', RequestdetailsPage);
        this.testCheckboxOpen = RequestdetailsPage;
        this.testCheckboxResult = RequestdetailsPage;
      }
    });
    alert.present();
  }
  requestdetails(launid){
    this.navCtrl.push(RequestdetailsPage,{laundryid: launid});
  }

}
