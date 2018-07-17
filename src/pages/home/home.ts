import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//From tutorial on JoshMorony.com
export class HomePage {
    @ViewChild('slides') slides: any;
    hasAnswered: boolean = false;
    score: number = 0;
    slideOptions: any;
    questions: any; 
    constructor(public navCtrl: NavController, public dataService: DataProvider) {
    }
    //Loads slides after user hits start button
    ionViewDidLoad() {
        //Locks the slides
        this.slides.lockSwipes(true);

        //Loads the questions for the trivia game
        this.dataService.load().then((data) => {
            data.map((question) => {
                return question;
            });    
            this.questions = data;
        });
    }
    //Goes to the next slide once a question has been answered
    nextSlide(){
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    }
    //Displays the answer to the user after they have chosen a selection
    select(answer, question){
        this.hasAnswered = true;
        answer.selected = true;
        question.flashCardFlipped = true;
 
        //If user gets question correct, they earn 1 point added to their score
        if(answer.correct){
            this.score++;
        }

        //Displays the next question after a timeout of 2 seconds
        setTimeout(() => {
            this.hasAnswered = false;
            this.nextSlide();
            answer.selected = false;
            question.flashCardFlipped = false;
        }, 2000);
    }

    //Restarts the game
    restart() {
        //Resets users score
        this.score = 0;
        this.slides.lockSwipes(false);

        //Goes back to the first question
        this.slides.slideTo(1, 1000);
        this.slides.lockSwipes(true);
    }
}
