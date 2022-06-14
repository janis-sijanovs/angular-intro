import { Component } from '@angular/core';
import { Joke } from 'src/models/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codelex-md-25';

  jokes = [] as Joke[]

  onRecieveData(eventData: Joke) {
    this.jokes.push(eventData)
  }

  onRecieveDelete(eventData: number) {
    this.jokes.splice(eventData, 1)
  }
}
