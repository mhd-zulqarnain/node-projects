import {Component, OnInit, EventEmitter,Output} from '@angular/core';
import {WebService} from '../web.service'

@Component({
  selector: 'app-new-messege',
  template: `
    <mat-card style="margin: 8px">
        <mat-card-content>
          <mat-input-container>
             <!--<input matInput  value="{{name}}" placeholder="Name"/>-->
             <input matInput  [(ngModel)]="message.owner" placeholder="Name"/> <!--for two way binding-->
          </mat-input-container>
          <mat-input-container>
             <textarea  matInput [(ngModel)]="message.text" placeholder="Messege"></textarea>
          </mat-input-container>
        </mat-card-content>
         <button (click)="post()" mat-button color="primary">Post</button>
     </mat-card>
`

})
export class NewMessegeComponent implements OnInit {

  private name: string = "test"
  message={
    owner:"",
    text:""
  }
  @Output() childEmitter = new EventEmitter()

  constructor(private webservices:WebService) {
  }

  post() {
    this.webservices.postMessges(this.message)
    console.log(this.message.text)
    console.log(this.message.owner)
    this.childEmitter.emit(this.message)
  }

  ngOnInit() {
  }

}
