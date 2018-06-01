import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';
import { CongratsComponent } from './user/congrats/congrats.component';
import { ForgotPassComponent } from './user/forgot-pass/forgot-pass.component';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatComponent } from './main-page/chat/chat.component';
import { FavoritesComponent } from './main-page/favorites/favorites.component';
import { SearchComponent } from './main-page/search/search.component';
import { SettingsComponent } from './main-page/settings/settings.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},

	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: 'congrats', component: CongratsComponent },
			{ path: 'forgot-pass', component: ForgotPassComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'signup', component: SignupComponent }
		],
	},
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: 'user-info',
		component: UserInfoComponent
	},
	{
		path: 'main',
		component: MainPageComponent,
		children: [
			{ path: 'search', component: SearchComponent },
			{ path: 'chat', component: ChatComponent },
			{ path: 'favorites', component: FavoritesComponent },
			{ path: 'settings', component: SettingsComponent }
		],
	},
	{
		path: '**',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
export const routingComponents = [
	SignupComponent, LoginComponent, CongratsComponent, ForgotPassComponent, ProfileComponent
];