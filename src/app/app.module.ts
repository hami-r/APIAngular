import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebtoolsComponent } from './webtools/webtools.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';

let myRoutes:Routes = [
  {
    path:"",
    component:WebtoolsComponent
  },
  {
    path:"us",
    component:UsPublicDataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WebtoolsComponent,
    UsPublicDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
