import {Component, OnInit, EventEmitter,Output} from '@angular/core';
import {WebService} from '../web.service'

@Component({
  selector: 'app-new-messege',
  template: `
  <!--  <mat-card style="margin: 8px">
        <mat-card-content>
          <mat-input-container>
             &lt;!&ndash;<input matInput  value="{{name}}" placeholder="Name"/>&ndash;&gt;
             <input matInput  [(ngModel)]="message.owner" placeholder="Name"/> &lt;!&ndash;for two way binding&ndash;&gt;
          </mat-input-container>
          <mat-input-container>
             <textarea  matInput [(ngModel)]="message.text" placeholder="Messege"></textarea>
          </mat-input-container>
        </mat-card-content>
         <button (click)="post()" mat-button color="primary">Post</button>
     </mat-card>-->
     <mat-card style="margin: 8px">
     <div class="form-group">
    <label for="file">Choose File</label>
    <input type="file"
           id="file"
           accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
           (change)="handleFileInput($event.target.files)">
                    <button (click)="post()" mat-button color="primary">Post</button>

      </div>
           </mat-card>

`

})
export class NewMessegeComponent implements OnInit {


  private name: string = "test"
  //private fd:FormData  = new FormData()
  message={
    owner:"",
    text:""
  }
  @Output() childEmitter = new EventEmitter()

  constructor(private webservices:WebService) {
  }

  handleFileInput(files: FileList) {
    //this.fileToUpload = .item(0)files;
    //console.log(this.fileToUpload)
    //this.fd.append("owner",files.item(0))
   this.message.owner=files.item(0)
   this.message.text="set parameters";
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
