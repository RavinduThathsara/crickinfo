import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/scores.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: '', redirectTo: '/scores', pathMatch: 'full' },
    { path: 'scores', component: ScoresComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
    { path: 'user-profile', loadComponent: () => import('./user-profile/user-profile.component').then(m => m.UserProfileComponent) },
    { path: 'players', loadComponent: () => import('./players/players.component').then(m => m.PlayersComponent) },
    { path: 'player/:id', loadComponent: () => import('./player-profile/player-profile.component').then(m => m.PlayerProfileComponent) }
];
