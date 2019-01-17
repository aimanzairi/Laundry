import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeePage } from '../homee/homee';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
// import {TabPage} from '../'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  signupError: string;
	form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      phone: ['', Validators.compose([Validators.required])],
      category: ['', Validators.compose([Validators.required])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  submit_signup() {

    let data = this.form.value;
		let credentials = {
			email: data.email,
      password: data.password
      };

      let profile ={
        username: data.username,
        phone: data.phone,
        category: data.category
      };
    
		this.auth.signUp(credentials, profile).then(
			() => this.navCtrl.setRoot(HomeePage),
			error => this.signupError = error.message
		);
  }


  homee(){
    this.navCtrl.push(HomeePage);
  }

}
