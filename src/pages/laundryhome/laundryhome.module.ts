import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaundryhomePage } from './laundryhome';

@NgModule({
  declarations: [
    LaundryhomePage,
  ],
  imports: [
    IonicPageModule.forChild(LaundryhomePage),
  ],
})
export class LaundryhomePageModule {}
