import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCardModule,MatInputModule,MatSnackBarModule,MatToolbarModule} from '@angular/material'

import { AppComponent } from './app.component';
import { MessegesComponent } from './messeges/messeges.component';
import { WebService } from './web.service';
import { HttpModule } from '@angular/http';
import { NewMessegeComponent } from './new-messege/new-messege.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessegesComponent,
    NewMessegeComponent
  ],
  imports: [
    FormsModule,HttpModule,BrowserModule,BrowserAnimationsModule,MatButtonModule,MatCardModule,MatInputModule,MatSnackBarModule,MatToolbarModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
