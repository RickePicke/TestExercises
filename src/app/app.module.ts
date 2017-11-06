import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SimpleTestsComponent } from './components/simple-tests/simple-tests.component';
import { MarkdownModule } from 'angular2-markdown';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MarkdownModule.forRoot(),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
