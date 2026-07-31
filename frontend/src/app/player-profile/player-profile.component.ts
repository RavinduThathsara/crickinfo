import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface PlayerProfile {
    id: number;
    name: string;
    country: string;
    birthDate: string;
    birthPlace: string;
    role: string;
    battingStyle: string;
    bowlingStyle: string;
    teams: string;
    imageUrl: string;
    nationalTeam: string;
    isLive: boolean;

    // Quick Stats
    matches: number;
    runs: number;
    avg: number;
    sr: number;
    hs: number;

    // ICC Rankings
    odiRank: number;
    testRank: number;

    // Detailed Stats
    testMatches: number;
    testInnings: number;
    testRuns: number;
    testHS: string;
    testAvg: number;
    testSR: number;
    test100s: number;
    test50s: number;

    odiMatches: number;
    odiInnings: number;
    odiRuns: number;
    odiHS: string;
    odiAvg: number;
    odiSR: number;
    odi100s: number;
    odi50s: number;

    t20Matches: number;
    t20Innings: number;
    t20Runs: number;
    t20HS: string;
    t20Avg: number;
    t20SR: number;
    t20100s: number;
    t2050s: number;
}

@Component({
    selector: 'app-player-profile',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './player-profile.component.html',
    styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {
    player: PlayerProfile | null = null;
    activeTab: string = 'statistics';
    loading: boolean = true;

    // Sample data - Replace with API call
    samplePlayer: PlayerProfile = {
        id: 1,
        name: 'VIRAT KOHLI',
        country: 'India',
        nationalTeam: 'NATIONAL TEAM INDIA',
        birthDate: 'November 05, 1988 (35 years)',
        birthPlace: 'Delhi, India',
        role: 'Top order Batter',
        battingStyle: 'Right Handed Bat',
        bowlingStyle: 'Right arm Offbreak',
        teams: 'India, RCS, Delhi',
        imageUrl: 'https://via.placeholder.com/300x400/1a472a/ffffff?text=Player',
        isLive: true,

        matches: 522,
        runs: 26733,
        avg: 53.6,
        sr: 88.4,
        hs: 88,

        odiRank: 3,
        testRank: 14,

        testMatches: 113,
        testInnings: 191,
        testRuns: 8848,
        testHS: '254*',
        testAvg: 49.16,
        testSR: 55.56,
        test100s: 29,
        test50s: 38,

        odiMatches: 292,
        odiInnings: 288,
        odiRuns: 13848,
        odiHS: '183',
        odiAvg: 58.68,
        odiSR: 93.62,
        odi100s: 58,
        odi50s: 72,

        t20Matches: 117,
        t20Innings: 109,
        t20Runs: 4037,
        t20HS: '122*',
        t20Avg: 51.76,
        t20SR: 138.16,
        t20100s: 1,
        t2050s: 37
    };

    careerData = [
        { year: '2010', runs: 1200 },
        { year: '2012', runs: 1800 },
        { year: '2014', runs: 2100 },
        { year: '2016', runs: 2500 },
        { year: '2018', runs: 2800 },
        { year: '2020', runs: 3200 }
    ];

    avgData = [
        { format: 'Test', avg: 49.2 },
        { format: 'ODI', avg: 58.7 },
        { format: 'T20I', avg: 51.8 }
    ];

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient
    ) { }

    ngOnInit() {
        // Load player data - for now using sample
        setTimeout(() => {
            this.player = this.samplePlayer;
            this.loading = false;
        }, 500);
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
    }

    getMaxRuns(): number {
        return Math.max(...this.careerData.map(d => d.runs));
    }

    getBarHeight(runs: number): number {
        return (runs / this.getMaxRuns()) * 100;
    }

    getAvgBarWidth(avg: number): number {
        return (avg / 60) * 100; // Assuming 60 as max for scaling
    }
}
