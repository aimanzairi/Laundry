import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { FirebaseUserModel } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase/app';
import { HomeePage } from '../homee/homee';

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
  laundryid;
  requestform: FormGroup;
  user: FirebaseUserModel = new FirebaseUserModel();

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, private auth: AuthService) {
    this.laundryid = this.navParams.get("laundryid");

    this.requestform = this.formBuilder.group({
      address: new FormControl(),
      estimate: new FormControl(),
      pickup: new FormControl(),
      totalkm: new FormControl(),
      return: new FormControl(),
      laundryid: new FormControl(),
      userid: new FormControl()
    });
  }
  presentLoading(resp) {
    console.log(resp);

    firebase.firestore().collection("order").doc().set({
      Date: new Date(),
      Status: "request",
      Total_estimation_kg: Number(resp.estimate),
      Total_km: Number(resp.totalkm),
      Total_real_kg: null,
      deliver: resp.return,
      laundry: "/laundry/"+resp.laundryid,
      pickup: resp.pickup,
      pickupadd: resp.address,
      runner: null,
      users: "/users/"+resp.userid
    });

    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.setRoot(HomeePage);
  }

  ionViewCanEnter() {
    console.log('ionViewDidLoad RequestdetailsPage');
    console.log(this.laundryid);
    this.auth.getCurrentUser().then(user=>{
      this.user = user;
    });
    console.log(this.user);
  }

  poppage(){
    this.navCtrl.pop();
  }

}
