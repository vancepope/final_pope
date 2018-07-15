import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaladinPage } from './paladin';

@NgModule({
  declarations: [
    PaladinPage,
  ],
  imports: [
    IonicPageModule.forChild(PaladinPage),
  ],
})
export class PaladinPageModule {}
