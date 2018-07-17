import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'flashcard',
  templateUrl: 'flashcard.html'
})
export class FlashcardComponent {
 //From tutorial from JoshMorony.com
  @Input('isFlipped') flipCard: boolean;
 
  constructor() {
 
  }
 
}
