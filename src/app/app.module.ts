import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuratorsTableComponent } from './components/curators/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CuratorsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
