import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

//not needed
const routes: Routes = [
/*   {path: '', redirectTo: '/home', pathMatch: 'full'},
/*
  {path: 'home', component: HomeComponent },
  {path: 'services', component: ServicesComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
