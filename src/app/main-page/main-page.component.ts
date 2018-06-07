import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilePhotoComponent } from '../profile/user-info/profile-photo/profile-photo.component';
import { GenderComponent } from '../profile/user-info/gender/gender.component';
import { PreferencesComponent } from '../profile/user-info/preferences/preferences.component';
import { BirthdateComponent } from '../profile/user-info/birthdate/birthdate.component';
import { InterestsComponent } from '../profile/user-info/interests/interests.component';
import { BiographyComponent } from '../profile/user-info/biography/biography.component';
import { AuthorizationService } from '../user/authorization/authorization.service';
import { UserInfoService } from '../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
	profileImg: string = "";
	navLinks = [
		{
			path: 'profile',
			label: 'HOME',
			icon: 'home'
		},
		{
			path: 'search',
			label: 'SEARCH',
			icon: 'search'
		},
		{
			path: 'chat',
			label: 'CHAT',
			icon: 'chat_bubble'
		},
		{
			path: 'favorites',
			label: 'FAVORITES',
			icon: 'favorite'
		},
		{
			path: 'settings',
			label: 'SETTINGS',
			icon: 'settings'
		}
	];
	windowWidth = window.innerWidth;

	constructor(
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService,
		private cookieService: CookieService
	) { }

	ngOnInit() {
		this.authorizationService.refreshTokens();
		this.userInfoService.getLocation();
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken')
		}
		this.userInfoService.sendRequest('getProfilePhoto', data)
		.toPromise()
		.then(
			(data) => {
				this.profileImg = "http://localhost:8100/" + data;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	logout() {
		this.authorizationService.deleteTokensAndLogout();
	}

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}
}
