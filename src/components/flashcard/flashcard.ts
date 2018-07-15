import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'flashcard',
  templateUrl: 'flashcard.html'
})
export class FlashcardComponent {
 
  @Input('isFlipped') flipCard: boolean;
 
  constructor() {
 
  }
 
}
