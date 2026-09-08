import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

interface Player {
  id: number;
  name: string;
  country: string;
  birthDate: string;
  role: string;
  odiRuns: number;
  odiBestScore: number;
  odiDebutDate: string;
  odiMatches: number;
  odiCenturies: number;
  testRuns: number;
  testBestScore: number;
  testDebutDate: string;
  testMatches: number;
  testCenturies: number;
  firstClassRuns: number;
  totalRuns: number;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="players-container">
      <!-- Header -->
      <header class="header">
        <a routerLink="/" class="logo-link" aria-label="cricketworld home">
          <span class="logo-text">cricketworld</span>
        </a>
        <nav class="nav">
          <a routerLink="/scores" class="nav-link">Live Scores</a>
          <a routerLink="/players" class="nav-link active">Series</a>
          <a href="#" class="nav-link">Teams</a>
          <a href="#" class="nav-link">News</a>
          <a href="#" class="nav-link">Features</a>
          <a href="#" class="nav-link">Videos</a>
          <a href="#" class="nav-link">Stats</a>
          <a href="#" class="nav-link">Games</a>
        </nav>
        <div class="header-tools">
          <button class="edition-button" type="button">Edition SL <span aria-hidden="true">⌄</span></button>
          <button class="icon-button" type="button" aria-label="Toggle theme">☾</button>
          <button class="icon-button" type="button" aria-label="Notifications">♧</button>
          <button class="icon-button" type="button" aria-label="Search">⌕</button>
          <div class="auth-actions">
            <a routerLink="/signup" class="auth-button auth-button-secondary">Sign up</a>
            <a routerLink="/login" class="auth-button auth-button-primary">Log in</a>
          </div>
        </div>
      </header>

      <div class="container">
        <h1>🏏 Cricket Players Statistics</h1>
        
        <div class="search-box">
          <input 
            type="text" 
            class="search-input"
            [(ngModel)]="searchName"
            (input)="onSearch()"
            placeholder="Search player (e.g., Kumar Sangakkara)..."
          />
        </div>

        <div *ngIf="loading" class="loading">
          Searching...
        </div>

        <div *ngIf="!loading && players.length === 0 && searchName" class="no-results">
          No players found matching "{{ searchName }}"
        </div>

        <div *ngFor="let player of players" class="player-card">
          <div class="player-header">
            <h2 class="player-name">{{ player.name }}</h2>
            <div class="player-info">
              <strong>Country:</strong> {{ player.country }} | 
              <strong>Role:</strong> {{ player.role }} | 
              <strong>Born:</strong> {{ player.birthDate | date }}
            </div>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-title">ODI Runs</div>
              <div class="stat-value">{{ player.odiRuns }}</div>
              <div class="stat-label">{{ player.odiMatches }} matches</div>
            </div>

            <div class="stat-card">
              <div class="stat-title">ODI Best Score</div>
              <div class="stat-value">{{ player.odiBestScore }}</div>
              <div class="stat-label">{{ player.odiCenturies }} centuries</div>
            </div>

            <div class="stat-card">
              <div class="stat-title">ODI Debut</div>
              <div class="stat-value">{{ player.odiDebutDate | date:'MMM yyyy' }}</div>
              <div class="stat-label">{{ player.odiDebutDate | date:'fullDate' }}</div>
            </div>

            <div class="stat-card">
              <div class="stat-title">Test Runs</div>
              <div class="stat-value">{{ player.testRuns }}</div>
              <div class="stat-label">{{ player.testMatches }} matches</div>
            </div>

            <div class="stat-card">
              <div class="stat-title">Test Best Score</div>
              <div class="stat-value">{{ player.testBestScore }}</div>
              <div class="stat-label">{{ player.testCenturies }} centuries</div>
            </div>

            <div class="stat-card">
              <div class="stat-title">Test Debut</div>
              <div class="stat-value">{{ player.testDebutDate | date:'MMM yyyy' }}</div>
              <div class="stat-label">{{ player.testDebutDate | date:'fullDate' }}</div>
            </div>

            <div class="stat-card">
              <div class="stat-title">First-Class Runs</div>
              <div class="stat-value">{{ player.firstClassRuns }}</div>
              <div class="stat-label">All formats</div>
            </div>

            <div class="stat-card">
              <div class="stat-title">Total Career Runs</div>
              <div class="stat-value">{{ player.totalRuns }}</div>
              <div class="stat-label">Complete career</div>
            </div>
          </div>

          <div class="player-actions">
            <button class="view-profile-btn" [routerLink]="['/player', player.id]">
              View Full Profile →
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .players-container {
      min-height: 100vh;
    }

    .header {
      background: #126b3a;
      padding: 0 9.2%;
      min-height: 66px;
      display: flex;
      align-items: center;
      gap: 42px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.16);
      margin-bottom: 30px;
    }

    .logo-link {
      display: flex;
      flex: 0 0 auto;
    }

    .logo-text {
      color: white;
      font-size: 25px;
      font-weight: 700;
      letter-spacing: -1px;
      white-space: nowrap;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 28px;
      flex: 1;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      white-space: nowrap;
      transition: opacity 0.2s;
    }

    .nav-link:hover,
    .nav-link.active {
      opacity: 0.72;
    }

    .header-tools {
      display: flex;
      align-items: center;
      gap: 16px;
      color: white;
    }

    .edition-button,
    .icon-button {
      color: white;
      background: transparent;
      border: 0;
      cursor: pointer;
      font: inherit;
    }

    .edition-button {
      white-space: nowrap;
      font-weight: 600;
    }

    .edition-button span {
      margin-left: 8px;
      font-size: 20px;
    }

    .icon-button {
      width: 28px;
      height: 28px;
      font-size: 25px;
      line-height: 1;
    }

    .icon-button:hover,
    .edition-button:hover {
      opacity: 0.72;
    }

    .auth-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: 4px;
    }

    .auth-button {
      border-radius: 5px;
      padding: 8px 13px;
      color: white;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      white-space: nowrap;
      transition: background 0.2s, border-color 0.2s;
    }

    .auth-button-secondary {
      border: 1px solid rgba(255, 255, 255, 0.7);
    }

    .auth-button-primary {
      background: #f1b51c;
      border: 1px solid #f1b51c;
      color: #163d27;
    }

    .auth-button:hover {
      background: rgba(255, 255, 255, 0.18);
    }

    .auth-button-primary:hover {
      background: #ffd45d;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    h1 {
      color: #1a472a;
      text-align: center;
      margin-bottom: 30px;
      font-size: 2.5rem;
    }

    .search-box {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }

    .search-input {
      width: 100%;
      padding: 15px;
      font-size: 1.1rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      transition: border-color 0.3s;
    }

    .search-input:focus {
      outline: none;
      border-color: #2d5a3d;
    }

    .player-card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }

    .player-header {
      border-bottom: 3px solid #2d5a3d;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }

    .player-name {
      font-size: 2rem;
      color: #1a472a;
      margin-bottom: 10px;
    }

    .player-info {
      color: #666;
      font-size: 1.1rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }

    .stat-card {
      background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
      padding: 20px;
      border-radius: 10px;
      color: white;
    }

    .stat-title {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: bold;
    }

    .stat-label {
      font-size: 0.85rem;
      opacity: 0.8;
      margin-top: 5px;
    }

    .no-results, .loading {
      text-align: center;
      color: #666;
      font-size: 1.2rem;
      padding: 40px;
    }

    .player-actions {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
    }

    .view-profile-btn {
      background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%);
      color: white;
      border: none;
      padding: 15px 40px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
    }

    .view-profile-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(26, 71, 42, 0.4);
    }

    @media (max-width: 1100px) {
      .header {
        padding: 12px 24px;
        gap: 24px;
        flex-wrap: wrap;
      }

      .nav {
        order: 3;
        flex-basis: 100%;
        overflow-x: auto;
        padding-bottom: 4px;
      }

      .header-tools {
        margin-left: auto;
      }
    }
  `]
})
export class PlayersComponent {
  searchName: string = '';
  players: Player[] = [];
  loading: boolean = false;
  private apiUrl = 'http://localhost:8081/api/players';

  constructor(private http: HttpClient) { }

  onSearch() {
    if (this.searchName.trim().length < 2) {
      this.players = [];
      return;
    }

    this.loading = true;
    this.http.get<Player[]>(`${this.apiUrl}/search?name=${this.searchName}`)
      .subscribe({
        next: (data) => {
          this.players = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching players:', error);
          this.loading = false;
        }
      });
  }
}
