import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { appRoutingModule } from './app-routing.moddule';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponentComponent } from './single-face-snap-component/single-face-snap-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponentComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [
    //  { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
