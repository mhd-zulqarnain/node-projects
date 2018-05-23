import {Component, OnInit} from '@angular/core';
  import {WebService} from "../web.service";

@Component({
  selector: 'app-messeges',
  template: `
    <div *ngFor="let msg of messeges">
         <mat-card style="margin: 9px">
           <mat-card-title>{{msg.text}}</mat-card-title>
           <mat-card-content>{{msg.owner}}</mat-card-content>
         </mat-card>
    </div> 
    `,
  styleUrls: ['./messeges.component.css']
})
export class MessegesComponent implements OnInit {
  messeges = [{text: "some text", owner: "tim"},{text: "other messge", owner: "jim"}];

  constructor(private webservices:WebService) {
  }

  //asyn and await to finish the task
  async ngOnInit() {
    var response = await this.webservices.getMesseges();
    // console.log(response.json())
    this.messeges=response.json();
  }

}
