import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShamanPage } from './shaman';

@NgModule({
  declarations: [
    ShamanPage,
  ],
  imports: [
    IonicPageModule.forChild(ShamanPage),
  ],
})
export class ShamanPageModule {}
