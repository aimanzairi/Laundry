import { Component } from '@angular/core';
import { NavController, IonicPage ,NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({


  selector: 'page-home',
  templateUrl: 'home.html',
  
})


export class HomePage {

  

  constructor(public navCtrl: NavController,public navParams: NavParams ) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  login(){
    this.navCtrl.push(LoginPage);
  }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
