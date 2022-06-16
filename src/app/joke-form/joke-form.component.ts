import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from 'src/models/joke.model';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.scss']
})
export class JokeFormComponent{

  @Output() submitJoke = new EventEmitter<Joke>();
  question = '';
  answer = '';

  onSumbit() {
    if (this. question && this.answer) {
      this.submitJoke.emit({ question: this.question, answer: this.answer });
      this.question = '';
      this.answer = '';
    }
  }
}
