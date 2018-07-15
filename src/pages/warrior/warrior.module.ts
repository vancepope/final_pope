import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarriorPage } from './warrior';

@NgModule({
  declarations: [
    WarriorPage,
  ],
  imports: [
    IonicPageModule.forChild(WarriorPage),
  ],
})
export class WarriorPageModule {}
