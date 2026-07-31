import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Match {
    id: number;
    team1: string;
    team2: string;
    team1Flag: string;
    team2Flag: string;
    team1Score: string;
    team2Score: string;
    status: string;
    isLive: boolean;
    overs: string;
    crr: string;
    batter1Name: string;
    batter1Score: string;
    batter2Name: string;
    batter2Score: string;
    bowlerName: string;
    bowlerStats: string;
}

interface UpcomingMatch {
    team1: string;
    team2: string;
    team1Flag: string;
    team2Flag: string;
    time: string;
    tournament: string;
}

interface RecentResult {
    team1: string;
    team2: string;
    team1Flag: string;
    team2Flag: string;
    team1Score: string;
    team2Score: string;
    result: string;
    daysAgo: number;
}

@Component({
    selector: 'app-scores',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './scores.component.html',
    styleUrls: ['./scores.component.css']
})
export class ScoresComponent {
    liveMatches: Match[] = [
        {
            id: 1,
            team1: 'IND',
            team2: 'AUS',
            team1Flag: '🇮🇳',
            team2Flag: '🇦🇺',
            team1Score: '342/4',
            team2Score: '',
            status: 'To bat',
            isLive: true,
            overs: '44.2 Overs',
            crr: 'CRR: 7.72',
            batter1Name: 'Virat Kohli',
            batter1Score: '113*(145)',
            batter2Name: 'Rishabh Pant',
            batter2Score: '45*(41)',
            bowlerName: 'Pat Cummins',
            bowlerStats: '12.2-1-68-2'
        }
    ];

    upcomingMatches: UpcomingMatch[] = [
        {
            team1: 'ENG',
            team2: 'PAK',
            team1Flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
            team2Flag: '🇵🇰',
            time: '04:12:18',
            tournament: 'T20 INTERNATIONAL'
        },
        {
            team1: 'SA',
            team2: 'NZ',
            team1Flag: '🇿🇦',
            team2Flag: '🇳🇿',
            time: 'Tomorrow',
            tournament: 'ODI SERIES'
        }
    ];

    recentResults: RecentResult[] = [
        {
            team1: 'WI',
            team2: 'BAN',
            team1Flag: '🏴',
            team2Flag: '🇧🇩',
            team1Score: '285/10',
            team2Score: '268/8',
            result: 'Bangladesh won by 2 wickets',
            daysAgo: 1
        },
        {
            team1: 'AFG',
            team2: 'ZIM',
            team1Flag: '🇦🇫',
            team2Flag: '🇿🇼',
            team1Score: '254/8',
            team2Score: '128/10',
            result: 'Afghanistan won by 36 runs',
            daysAgo: 5
        },
        {
            team1: 'IRE',
            team2: 'SCO',
            team1Flag: '🇮🇪',
            team2Flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
            team1Score: '218/6',
            team2Score: '208/10',
            result: 'Ireland won by 2 runs',
            daysAgo: 2
        }
    ];

    worldCup = {
        name: 'World Cup 2024',
        icon: '🏆'
    };
}
