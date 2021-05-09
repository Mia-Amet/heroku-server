import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

    this.auth.token.subscribe(res => {
      console.log(!!res);
      if (res) this.router.navigate(['/home']);
    });
  }

  navigateLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.signupForm.invalid) return;

    this.auth.signup(this.signupForm.get('email').value, this.signupForm.get('password').value)
      .then(credentials => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Hello, user :)' });
      })
      .catch(err => {
      this.messageService.add({ severity: 'error', summary: 'Login failed', detail: err.detail });
    })
      .finally(() => {
        this.signupForm.reset();
      });
  }

}
