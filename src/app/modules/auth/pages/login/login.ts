import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink   // 👈 CLAVE
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {

  public login: FormGroup = new FormGroup({});

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin(): void {
    this.login = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]),
    });
  }

  sendLogin(): void {
    if (this.login.invalid) {
      this.login.markAllAsTouched();
      return;
    }

    const data = {
      user_name: this.login.value.user_name,
      password: this.login.value.password
    };

    console.log(data);

    this._router.navigateByUrl('/admin/administration');
  }
}
