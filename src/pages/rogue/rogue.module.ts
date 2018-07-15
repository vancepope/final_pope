import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoguePage } from './rogue';

@NgModule({
  declarations: [
    RoguePage,
  ],
  imports: [
    IonicPageModule.forChild(RoguePage),
  ],
})
export class RoguePageModule {}
