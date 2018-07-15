import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HunterPage } from './hunter';

@NgModule({
  declarations: [
    HunterPage,
  ],
  imports: [
    IonicPageModule.forChild(HunterPage),
  ],
})
export class HunterPageModule {}
