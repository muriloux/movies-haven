import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CuratorsTableComponent } from './components/curators/table/table.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RadioPlayerComponent } from './components/nav-bar/radio-player/radio-player.component';

@NgModule({
  declarations: [
    AppComponent,
    CuratorsTableComponent,
    NavBarComponent,
    RadioPlayerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
