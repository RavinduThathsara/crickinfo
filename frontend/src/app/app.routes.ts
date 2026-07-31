import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/scores.component';

export const routes: Routes = [
    { path: '', redirectTo: '/scores', pathMatch: 'full' },
    { path: 'scores', component: ScoresComponent },
    { path: 'players', loadComponent: () => import('./players/players.component').then(m => m.PlayersComponent) },
    { path: 'player/:id', loadComponent: () => import('./player-profile/player-profile.component').then(m => m.PlayerProfileComponent) }
];
