import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface RegisterPayload {
    fullName: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    country: string;
    agreeToTerms: boolean;
}

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    submitted = false;
    isSubmitting = false;
    serverError = '';

    signupForm = this.formBuilder.group({
        fullName: ['', [Validators.required, Validators.minLength(2)]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9+\-()\s]{7,20}$/)]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
        country: ['', Validators.required],
        agreeTerms: [false, Validators.requiredTrue]
    });

    countryOptions = [
        'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
        'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
        'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
        'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
        'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
        'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China',
        'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus',
        'Czechia', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica',
        'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
        'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France',
        'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada',
        'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras',
        'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
        'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
        'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon',
        'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
        'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
        'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia',
        'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique',
        'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand',
        'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
        'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea',
        'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
        'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
        'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
        'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
        'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
        'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname',
        'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
        'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
        'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
        'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
        'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
    ];

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router
    ) { }

    get fullName() {
        return this.signupForm.get('fullName');
    }

    get email() {
        return this.signupForm.get('email');
    }

    get username() {
        return this.signupForm.get('username');
    }

    get phoneNumber() {
        return this.signupForm.get('phoneNumber');
    }

    get password() {
        return this.signupForm.get('password');
    }

    get confirmPassword() {
        return this.signupForm.get('confirmPassword');
    }

    get country() {
        return this.signupForm.get('country');
    }

    get agreeTerms() {
        return this.signupForm.get('agreeTerms');
    }

    submitForm() {
        this.submitted = true;
        this.serverError = '';

        if (this.signupForm.invalid) {
            this.signupForm.markAllAsTouched();
            return;
        }

        if (this.signupForm.value.password !== this.signupForm.value.confirmPassword) {
            this.serverError = 'Passwords do not match.';
            return;
        }

        const payload: RegisterPayload = {
            fullName: this.signupForm.value.fullName ?? '',
            username: this.signupForm.value.username ?? '',
            email: this.signupForm.value.email ?? '',
            phoneNumber: this.signupForm.value.phoneNumber ?? '',
            password: this.signupForm.value.password ?? '',
            confirmPassword: this.signupForm.value.confirmPassword ?? '',
            country: this.signupForm.value.country ?? '',
            agreeToTerms: this.signupForm.value.agreeTerms ?? false
        };

        this.isSubmitting = true;

        this.http.post('http://localhost:8080/api/auth/register', payload, { responseType: 'text' }).subscribe({
            next: (message) => {
                const profile = {
                    fullName: payload.fullName,
                    username: payload.username,
                    email: payload.email,
                    phoneNumber: payload.phoneNumber,
                    country: payload.country,
                    welcomeMessage: message
                };

                localStorage.setItem('registeredUser', JSON.stringify(profile));
                this.router.navigate(['/user-profile']);
            },
            error: (error) => {
                this.serverError = error?.error || 'Registration failed. Please try again.';
                this.isSubmitting = false;
            }
        });
    }
}
