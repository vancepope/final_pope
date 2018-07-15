import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarlockPage } from './warlock';

@NgModule({
  declarations: [
    WarlockPage,
  ],
  imports: [
    IonicPageModule.forChild(WarlockPage),
  ],
})
export class WarlockPageModule {}
