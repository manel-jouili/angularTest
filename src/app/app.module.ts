import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AddStageComponent } from './add-stage/add-stage.component';
import { StageComponent } from './stage/stage.component';
import { GetStageComponent } from './get-stage/get-stage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddStageComponent,
    StageComponent,
    GetStageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
