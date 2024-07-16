import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  constructor(private fb: FormBuilder, private router: Router) {}
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  get formControls() {
    return this.loginForm.controls;
  }
  login(): void {
    localStorage.setItem('user', JSON.stringify(this.loginForm.value));
    this.router.navigate(['/home/main']);
  }
}
