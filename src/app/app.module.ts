import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { AcercaComponent } from './acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
