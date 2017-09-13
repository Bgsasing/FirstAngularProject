import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { DataEntryComponent } from './data.component';
import { AddEntryComponent } from './AddStud.Component';
import { PrintEntryComponent } from './ListStud.Component';
import { DisplayComponent } from './Display.Component';

@NgModule({
  declarations: [
    AppComponent,
    DataEntryComponent,
    AddEntryComponent,
    PrintEntryComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }