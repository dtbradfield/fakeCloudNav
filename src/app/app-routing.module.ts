import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { McmsComponent } from './mcms/mcms.component';
import { Iamc1Component } from './iamc1/iamc1.component';
import { Iamc2Component } from './iamc2/iamc2.component';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';

const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent, children: [
    { path: 'managed-cloud-migration-services', component: McmsComponent },
    { path: 'identity-and-access-management', component: Iamc1Component },
    { path: 'iam-cloud-cloud-drive-mapper', component: Iamc2Component },
    { path: 'additional-services', component: AdditionalServicesComponent }
  ] },
  { path: 'contact', component: ContactComponent },
  { path: '*', component: LandingComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
