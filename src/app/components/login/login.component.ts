import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.auth.token.subscribe(res => {
      console.log(!!res);
      if (res) this.router.navigate(['/home']);
    });
  }

  navigateSignup() {
    this.router.navigate(['/signup']);
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    this.auth.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(credentials => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Hello, user :)' });
      })
      .catch(err => {
        const detail = err.code === 'auth/wrong-password' ?
          'Your username and/or password do not match' : 'Could not find your account';
        this.messageService.add({ severity: 'error', summary: 'Login failed', detail });
      })
      .finally(() => {
        this.loginForm.reset();
      });
  }
}
