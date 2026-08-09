import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

interface RegisteredUser {
    fullName: string;
    username: string;
    email: string;
    phoneNumber: string;
    country: string;
    welcomeMessage?: string;
}

@Component({
    selector: 'app-user-profile',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    user: RegisteredUser | null = null;

    ngOnInit() {
        const savedUser = localStorage.getItem('registeredUser');

        if (savedUser) {
            this.user = JSON.parse(savedUser) as RegisteredUser;
        }
    }
}