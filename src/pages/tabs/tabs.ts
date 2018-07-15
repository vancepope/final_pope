import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { VideoPage } from '../video/video';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //Sets tabs 1 through 3
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = VideoPage;

  constructor() {

  }
}
