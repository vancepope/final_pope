import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Heros } from '../../models/heros';
import { DruidPage } from '../druid/druid';
import { HunterPage } from '../hunter/hunter';
import { MagePage } from '../mage/mage';
import { PaladinPage } from '../paladin/paladin';
import { PriestPage } from '../priest/priest';
import { RoguePage } from '../rogue/rogue';
import { ShamanPage } from '../shaman/shaman';
import { WarlockPage } from '../warlock/warlock';
import { WarriorPage } from '../warrior/warrior';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  heros: Heros[] = [];
  constructor(public navCtrl: NavController) {
    //Creates new instances of heros
    this.heros = [new Heros("Druid","assets/imgs/Malfurion_Stormrage.png"), 
                  new Heros("Hunter","assets/imgs/Rexxar.png"),
                  new Heros("Mage","assets/imgs/Jaina_Proudmoore.png"),
                  new Heros("Paladin","assets/imgs/Uther_Lightbringer.png"),
                  new Heros("Priest","assets/imgs/Anduin_Wrynn.png"),
                  new Heros("Rogue","assets/imgs/Valeera_Sanguinar.png"),
                  new Heros("Shaman","assets/imgs/Thrall.png"),
                  new Heros("Warlock","assets/imgs/Gul'dan.png"),
                  new Heros("Warrior","assets/imgs/Garrosh_Hellscream.png"), ]
  }
  goToPage(index: number){
    if (index == 0){
      this.navCtrl.push(DruidPage);
    } else if (index == 1){
      this.navCtrl.push(HunterPage);
    } else if (index == 2){
      this.navCtrl.push(MagePage)
    } else if (index == 3){
      this.navCtrl.push(PaladinPage);
    } else if (index == 4){
      this.navCtrl.push(PriestPage); 
    } else if (index == 5){
      this.navCtrl.push(RoguePage);
    } else if (index == 6){
      this.navCtrl.push(ShamanPage);
    } else if (index == 7){
      this.navCtrl.push(WarlockPage);
    } else {
      this.navCtrl.push(WarriorPage);
    }
  }
}
