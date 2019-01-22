import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthenticationPage} from '../pages/authentication/authentication';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MyorderPage } from '../pages/myorder/myorder';
import { LaundrylistPage } from '../pages/laundrylist/laundrylist';
import { HomeePage } from '../pages/homee/homee';
import { DeliveryservicePage } from '../pages/deliveryservice/deliveryservice';
import {AcceptRequestPage} from '../pages/accept-request/accept-request';
import {ComissionPage}from '../pages/comission/comission';
import { FirstPage } from '../pages/first/first';
import { Laundrylist2Page } from '../pages/laundrylist2/laundrylist2';
import { RequestdetailsPage } from '../pages/requestdetails/requestdetails';
import { RunnerhomePage } from '../pages/runnerhome/runnerhome';
import { ResitPage } from '../pages/resit/resit';
import { RegisterrunnerPage } from '../pages/registerrunner/registerrunner';
import { RegisterlaundryPage } from '../pages/registerlaundry/registerlaundry';
import { LaundryhomePage } from '../pages/laundryhome/laundryhome';
import { SignoutPage } from '../pages/signout/signout';

import { AuthService } from '../services/auth.service';
import { BookedPage } from '../pages/booked/booked';
import { BookingPage } from '../pages/booking/booking';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FirstPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Authenticate', component: AuthenticationPage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'My Order', component: MyorderPage },
      { title: 'Laundry List (Request)', component: LaundrylistPage },
      { title: 'Homee', component: HomeePage },
      { title: 'Delivery Service', component: DeliveryservicePage },
      { title: 'List Requester', component: AcceptRequestPage },
      { title: 'Comission', component: ComissionPage },
      { title: 'Easy Breezy', component: FirstPage },
      { title: 'Laundry List (Book)', component: Laundrylist2Page },
      { title: 'Request Details', component: RequestdetailsPage },
      { title: 'Runner Home', component: RunnerhomePage },
      { title: 'Resit', component: ResitPage },
      { title: 'Register (Runner)', component: RegisterrunnerPage },
      { title: 'Register (Laundry)', component: RegisterlaundryPage },
      { title: 'Home (Laundry)', component: LaundryhomePage },
      { title: 'Sign Out', component: SignoutPage },
      { title: 'Booked', component: BookedPage },
      { title: 'Booking', component: BookingPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
