import { Component } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  responseData: any;
  errorResponse!: string;

  adminLoginForm = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  loginAdmin() {
    console.log(this.adminLoginForm.value);
    if (this.adminLoginForm.valid) {
      this.authService.adminLogin(this.adminLoginForm.value).subscribe(
        (result) => {
          if (result != null) {
            this.responseData = result;
            localStorage.setItem('token', JSON.stringify(this.responseData));
            this.router.navigate(['/']);
            this.toastr.success('Login Successful');
          }
        },
        (err) => {
          this.errorResponse = err;
          if (err) {
            this.toastr.error(err.error.message);
          }
        }
      );
    }
  }
}
