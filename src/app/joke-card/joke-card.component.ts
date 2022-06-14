import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Joke } from 'src/models/joke';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent{

  @Input() joke = {} as Joke;
  @Input() selfID = 0;
  @Output() submitDelete = new EventEmitter<number>();
  showAnswer = false;

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  deleteSelf() {
    this.submitDelete.emit(this.selfID);
  }
}
