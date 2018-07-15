import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VideoPlayer } from '@ionic-native/video-player';

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  video: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private videoPlayer: VideoPlayer) {
  }

  //Stops video
  async stopVideo(){
    try{
      //Waits to notify the app when the video has been closed
      await this.videoPlayer.close();
      console.log("Video was stopped");
    } catch(e){
      console.error(e);
   }
  }
  
  //Plays video
  async playVideo(){
    try{
      //Waits for videoPlayer to notify the app when the video has been completed
      await this.videoPlayer.play('assets/mp4/hearthstone.mp4');
      console.log("Video is complete");
    } catch(e){
      //Reports error to console
      console.error(e);
    }
  }
}
