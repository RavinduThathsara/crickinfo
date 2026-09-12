import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface CricketGround {
    name: string;
    city: string;
    country: string;
    capacity: string;
    homeTeam: string;
    established: string;
    description: string;
    surface: string;
}

@Component({
    selector: 'app-grounds',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './grounds.component.html',
    styleUrls: ['./grounds.component.css']
})
export class GroundsComponent {
    selectedCountry = 'All grounds';
    searchTerm = '';
    selectedGround: CricketGround | null = null;

    countries = [
        'All grounds', 'Sri Lanka', 'India', 'Pakistan', 'West Indies',
        'England', 'Bangladesh', 'New Zealand', 'South Africa', 'Australia'
    ];

    grounds: CricketGround[] = [
        {
            name: 'R. Premadasa Stadium',
            city: 'Colombo',
            country: 'Sri Lanka',
            capacity: '35,000',
            homeTeam: 'Sri Lanka',
            established: '1986',
            surface: 'Usually assists spin and stroke play',
            description: 'A famous limited-overs venue known for big Sri Lankan cricket nights and energetic crowds.'
        },
        {
            name: 'Galle International Stadium',
            city: 'Galle',
            country: 'Sri Lanka',
            capacity: '35,000',
            homeTeam: 'Sri Lanka',
            established: '1984',
            surface: 'Spin-friendly as matches develop',
            description: 'A scenic Test ground beside the Indian Ocean, framed by the historic Galle Fort.'
        },
        {
            name: 'Narendra Modi Stadium',
            city: 'Ahmedabad',
            country: 'India',
            capacity: '132,000',
            homeTeam: 'India',
            established: '1982',
            surface: 'Balanced with pace and bounce',
            description: 'The world’s largest cricket stadium, built for major international fixtures and finals.'
        },
        {
            name: 'Wankhede Stadium',
            city: 'Mumbai',
            country: 'India',
            capacity: '33,000',
            homeTeam: 'India',
            established: '1974',
            surface: 'Good bounce and fast outfield',
            description: 'A compact, atmospheric stadium beside the Arabian Sea with a rich cricket history.'
        },
        {
            name: 'Gaddafi Stadium',
            city: 'Lahore',
            country: 'Pakistan',
            capacity: '27,000',
            homeTeam: 'Pakistan',
            established: '1959',
            surface: 'Traditionally good for batting',
            description: 'One of Pakistan’s best-known cricket grounds and a regular host for major white-ball games.'
        },
        {
            name: 'National Stadium',
            city: 'Karachi',
            country: 'Pakistan',
            capacity: '34,228',
            homeTeam: 'Pakistan',
            established: '1955',
            surface: 'Can offer pace early in a match',
            description: 'A historic Karachi venue that has hosted memorable Pakistan Test and ODI performances.'
        },
        {
            name: 'Kensington Oval',
            city: 'Bridgetown',
            country: 'West Indies',
            capacity: '28,000',
            homeTeam: 'West Indies',
            established: '1882',
            surface: 'Traditionally lively for fast bowlers',
            description: 'A celebrated Caribbean ground with a long Test history and a famous party atmosphere.'
        },
        {
            name: 'Queen\'s Park Oval',
            city: 'Port of Spain',
            country: 'West Indies',
            capacity: '20,000',
            homeTeam: 'West Indies',
            established: '1896',
            surface: 'Often rewards timing and placement',
            description: 'A classic Trinidad venue known for elegant batting and a strong local cricket culture.'
        },
        {
            name: 'Lord\'s Cricket Ground',
            city: 'London',
            country: 'England',
            capacity: '31,181',
            homeTeam: 'England',
            established: '1814',
            surface: 'Movement for seamers in helpful conditions',
            description: 'The Home of Cricket, recognised worldwide for its heritage, slope, and iconic honours boards.'
        },
        {
            name: 'The Oval',
            city: 'London',
            country: 'England',
            capacity: '27,500',
            homeTeam: 'England',
            established: '1845',
            surface: 'Good for stroke play once settled',
            description: 'A historic south London ground and the birthplace of the Ashes legend.'
        },
        {
            name: 'Sher-e-Bangla National Cricket Stadium',
            city: 'Dhaka',
            country: 'Bangladesh',
            capacity: '25,000',
            homeTeam: 'Bangladesh',
            established: '2006',
            surface: 'Often supports spin',
            description: 'Bangladesh’s principal international venue and one of the country’s loudest cricket settings.'
        },
        {
            name: 'Zahur Ahmed Chowdhury Stadium',
            city: 'Chattogram',
            country: 'Bangladesh',
            capacity: '22,000',
            homeTeam: 'Bangladesh',
            established: '2004',
            surface: 'Can be rewarding for batters',
            description: 'A coastal venue that regularly hosts Bangladesh Tests, ODIs, and T20 internationals.'
        },
        {
            name: 'Eden Park',
            city: 'Auckland',
            country: 'New Zealand',
            capacity: '50,000',
            homeTeam: 'New Zealand',
            established: '1900',
            surface: 'Short boundaries create attacking games',
            description: 'New Zealand’s largest cricket stadium, famous for a distinctive oval shape and electric atmosphere.'
        },
        {
            name: 'Hagley Oval',
            city: 'Christchurch',
            country: 'New Zealand',
            capacity: '18,000',
            homeTeam: 'New Zealand',
            established: '1867',
            surface: 'Early seam movement is common',
            description: 'A picturesque parkland ground where swing bowling and patient batting are often rewarded.'
        },
        {
            name: 'Newlands Cricket Ground',
            city: 'Cape Town',
            country: 'South Africa',
            capacity: '25,000',
            homeTeam: 'South Africa',
            established: '1888',
            surface: 'Pace and bounce with occasional seam',
            description: 'One of cricket’s most beautiful settings, with Table Mountain rising behind the ground.'
        },
        {
            name: 'Wanderers Stadium',
            city: 'Johannesburg',
            country: 'South Africa',
            capacity: '34,000',
            homeTeam: 'South Africa',
            established: '1956',
            surface: 'Extra bounce and quick outfield',
            description: 'A high-energy venue known for fast scoring, steep bounce, and big international contests.'
        },
        {
            name: 'Melbourne Cricket Ground',
            city: 'Melbourne',
            country: 'Australia',
            capacity: '100,024',
            homeTeam: 'Australia',
            established: '1853',
            surface: 'Traditionally good for pace and bounce',
            description: 'The iconic MCG hosts the Boxing Day Test and some of Australia’s biggest cricket occasions.'
        },
        {
            name: 'Sydney Cricket Ground',
            city: 'Sydney',
            country: 'Australia',
            capacity: '48,000',
            homeTeam: 'Australia',
            established: '1848',
            surface: 'Can offer turn later in matches',
            description: 'A historic ground with a distinctive green hill, famous for New Year Tests and Ashes moments.'
        }
    ];

    get visibleGrounds(): CricketGround[] {
        const search = this.searchTerm.trim().toLowerCase();

        return this.grounds.filter(ground => {
            const matchesCountry = this.selectedCountry === 'All grounds'
                || ground.country === this.selectedCountry;
            const searchableText = `${ground.name} ${ground.city} ${ground.country} ${ground.homeTeam}`.toLowerCase();
            const matchesSearch = !search || searchableText.includes(search);

            return matchesCountry && matchesSearch;
        });
    }

    getGroundImage(ground: CricketGround): string {
        return ground.name === 'R. Premadasa Stadium'
            ? 'assets/SlGround1.png'
            : 'assets/ground-venue.svg';
    }

    openGroundImage(ground: CricketGround): void {
        this.selectedGround = ground;
    }

    closeGroundImage(): void {
        this.selectedGround = null;
    }
}
