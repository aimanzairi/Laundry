import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaundrylistPage } from './laundrylist';

@NgModule({
  declarations: [
    LaundrylistPage,
  ],
  imports: [
    IonicPageModule.forChild(LaundrylistPage),
  ],
})
export class LaundrylistPageModule {}
