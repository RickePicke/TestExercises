import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleTestsComponent } from './components/simple-tests/simple-tests.component';
import { FacitComponent } from './components/facit/facit.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTestsComponent,
    FacitComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
