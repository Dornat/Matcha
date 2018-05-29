import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material-module/material.module';
import { CongratsComponent } from './user/congrats/congrats.component';
import { ForgotPassComponent } from './user/forgot-pass/forgot-pass.component';

import { CookieService } from 'ngx-cookie-service';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { GenderAndPreferencesComponent } from './profile/user-info/gender-and-preferences/gender-and-preferences.component';
import { BirthdateComponent } from './profile/user-info/birthdate/birthdate.component';
import { CityComponent } from './profile/user-info/city/city.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HomeComponent,
		routingComponents,
		CongratsComponent,
		ForgotPassComponent,
		ProfileComponent,
		UserInfoComponent,
		GenderAndPreferencesComponent,
		BirthdateComponent,
		CityComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MaterialModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [
		CookieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
