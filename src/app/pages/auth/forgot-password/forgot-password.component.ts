import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  responseData: any;
  errorResponse!: string;

  userForgotPasswordForm = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  forgotPasswordUser() {
    const email = this.userForgotPasswordForm.controls['email'].value;
    const newPassword = this.userForgotPasswordForm.controls['password'].value;
    this.userService.forgotPassword({ email, newPassword }).subscribe({
      next: () => {
        this.userForgotPasswordForm.reset();
      },
      error: (err) => {
        this.errorResponse = err.error.message;
      },
    });
  }
}
