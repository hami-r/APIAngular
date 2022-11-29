import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebtoolsComponent } from './webtools/webtools.component';
import { UsPublicDataComponent } from './us-public-data/us-public-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NavbarComponent } from './navbar/navbar.component';

let myRoutes:Routes = [
  {
    path:"",
    component:WebtoolsComponent
  },
  {
    path:"us",
    component:UsPublicDataComponent
  },
  {
    path:"userinfo",
    component:UserInfoComponent
  },
  {
    path:"product",
    component:ProductListComponent
  },
  {
    path:"userdata",
    component:UserDataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"quote",
    component:QuotesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WebtoolsComponent,
    UsPublicDataComponent,
    UserInfoComponent,
    ProductListComponent,
    UserDataComponent,
    TodoComponent,
    QuotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
