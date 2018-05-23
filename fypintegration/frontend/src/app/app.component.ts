import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h2 style="margin: 12px;color: blue" >Write application</h2>
  <app-new-messege (childEmitter)="onPosted($event)"></app-new-messege>
  <app-messeges></app-messeges>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my app';
  onPosted(messege){
    console.log(messege)
  }
}
