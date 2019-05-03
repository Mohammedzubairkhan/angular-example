import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppComponent2 } from './app2.component';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
@NgModule({
  declarations: [
    AppComponent, AppComponent2
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, 
    MatButtonModule, MatCheckboxModule,FormsModule, MatInputModule,
    HttpClientModule, MatListModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
