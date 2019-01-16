import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthenticationPage} from '../pages/authentication/authentication';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MyorderPage } from '../pages/myorder/myorder';
import { LaundrylistPage } from '../pages/laundrylist/laundrylist';
import { HomeePage } from '../pages/homee/homee';
import { DeliveryservicePage } from '../pages/deliveryservice/deliveryservice';
import { AcceptRequestPage } from '../pages/accept-request/accept-request';
import { ComissionPage } from '../pages/comission/comission';
import { FirstPage } from '../pages/first/first';
import { Laundrylist2Page } from '../pages/laundrylist2/laundrylist2';
import { RequestdetailsPage } from '../pages/requestdetails/requestdetails';
import { RunnerhomePage } from '../pages/runnerhome/runnerhome';
import { ResitPage } from '../pages/resit/resit';
import { Calendar1Page } from '../pages/calendar1/calendar1';
import { SignoutPage } from '../pages/signout/signout';
import { CalendarModule } from 'ionic3-calendar-en';
import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";
import { RegisterrunnerPage } from '../pages/registerrunner/registerrunner';
import { RegisterlaundryPage } from '../pages/registerlaundry/registerlaundry';
import { LaundryhomePage } from '../pages/laundryhome/laundryhome';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { firebaseConfig } from '../config';
import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors'
import { BookedPage } from '../pages/booked/booked';
import { BookingPage } from '../pages/booking/booking';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AuthenticationPage,
    LoginPage,
    RegisterPage,
    MyorderPage,
    LaundrylistPage,
    HomeePage,
    DeliveryservicePage,
    AcceptRequestPage,
    ComissionPage,
    FirstPage,
    Laundrylist2Page,
    RequestdetailsPage,
    RunnerhomePage,
    ResitPage,
    CalendarComponent,
    Calendar1Page,
    RegisterrunnerPage,
    RegisterlaundryPage,
    LaundryhomePage,
    SignoutPage,
    BookedPage,
    BookingPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    CalendarModule,
    NgxErrorsModule,
    AngularFirestoreModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AuthenticationPage,
    LoginPage,
    RegisterPage,
    MyorderPage,
    LaundrylistPage,
    HomeePage,
    DeliveryservicePage,
    AcceptRequestPage,
    ComissionPage,
    FirstPage,
    Laundrylist2Page,
    RequestdetailsPage,
    RunnerhomePage,
    ResitPage,
    CalendarComponent,
    Calendar1Page,
    RegisterrunnerPage,
    RegisterlaundryPage,
    LaundryhomePage,
    SignoutPage,
    BookedPage,
    BookingPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    CalendarComponent,
    AngularFireAuth,
    AuthService,
    AngularFirestore
  ]
})
export class AppModule {}
