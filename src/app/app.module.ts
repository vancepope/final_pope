import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FlashcardComponent } from '../components/flashcard/flashcard';
import { DataProvider } from '../providers/data/data';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { SigninPage } from '../pages/signin/signin';
import { RegisterPage } from '../pages/register/register';
import { UsersService } from '../services/users';
import { AuthService } from '../services/auth';
import { VideoPage } from '../pages/video/video';
import { VideoPlayer } from '@ionic-native/video-player';
import { DruidPage } from '../pages/druid/druid';
import { HunterPage } from '../pages/hunter/hunter';
import { MagePage } from '../pages/mage/mage';
import { PaladinPage } from '../pages/paladin/paladin';
import { PriestPage } from '../pages/priest/priest';
import { RoguePage } from '../pages/rogue/rogue';
import { ShamanPage } from '../pages/shaman/shaman';
import { WarlockPage } from '../pages/warlock/warlock';
import { WarriorPage } from '../pages/warrior/warrior';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    FlashcardComponent,
    VideoPage,
    AboutPage,
    SigninPage,
    RegisterPage,
    DruidPage,
    HunterPage,
    MagePage,
    PaladinPage,
    PriestPage,
    RoguePage,
    ShamanPage,
    WarlockPage,
    WarriorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'bottom'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    VideoPage,
    AboutPage,
    SigninPage,
    RegisterPage,
    DruidPage,
    HunterPage,
    MagePage,
    PaladinPage,
    PriestPage,
    RoguePage,
    ShamanPage,
    WarlockPage,
    WarriorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    DataProvider,
    UsersService,
    AuthService,
    VideoPlayer
  ]
})
export class AppModule {}
