import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ContactModule} from './contact/contact.module';
import {AppRoutingModule } from './app-routing.module';

import {CoreModule} from './core/core.module';

import {AppComponent} from './app.component';







@NgModule({
	imports:[BrowserModule,ContactModule,AppRoutingModule,CoreModule],
	declarations:[AppComponent],
	bootstrap:[AppComponent]
})

export class AppModule{}