import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembersComponent } from './members/members.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import {MaterialModule} from "./material/material.module";
import { HomeComponent } from './home/home.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    HeaderComponent,
    LayoutComponent,
    HomeComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
