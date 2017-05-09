import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { RouterModule, Routes } from '@angular/router';
import { SearchService } from './search/search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    JsonpModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
