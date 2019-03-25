import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { McmsComponent } from './mcms/mcms.component';
import { Iamc1Component } from './iamc1/iamc1.component';
import { Iamc2Component } from './iamc2/iamc2.component';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    McmsComponent,
    Iamc1Component,
    Iamc2Component,
    AdditionalServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
