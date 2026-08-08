import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  submitted = false;

  signupForm = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    favoriteTeam: ['', Validators.required],
    agreeTerms: [false, Validators.requiredTrue]
  });

  teamOptions = ['India', 'Australia', 'England', 'Pakistan', 'South Africa', 'New Zealand'];

  constructor(private formBuilder: FormBuilder) {}

  get fullName() {
    return this.signupForm.get('fullName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get favoriteTeam() {
    return this.signupForm.get('favoriteTeam');
  }

  get agreeTerms() {
    return this.signupForm.get('agreeTerms');
  }

  submitForm() {
    this.submitted = true;

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }

    console.log('Signup submitted', this.signupForm.value);
  }
}
