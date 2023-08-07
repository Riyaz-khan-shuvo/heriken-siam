import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  responseData: any;
  errorResponse!: string;

  adminLoginForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  loginAdmin() {
    if (this.adminLoginForm.valid) {
      this.authService.adminLogin(this.adminLoginForm.value).subscribe(
        (result) => {
          if (result != null) {
            this.responseData = result;
            localStorage.setItem('token', this.responseData.access_token);
            this.route.navigate(['/']);
          }
        },
        (err) => {
          this.errorResponse = err.error.errors;
        }
      );
    }
  }
}
