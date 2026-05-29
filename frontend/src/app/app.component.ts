import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
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
      </div>
    </div>
  `
})
export class AppComponent {
    searchName: string = '';
    players: Player[] = [];
    loading: boolean = false;
    private apiUrl = 'http://localhost:8080/api/players';

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
