import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {AuthServices} from '@app/modules/auth/services/auth';
import {StorageService} from '@app/core/services/StorageService ';

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
  isLoading = false;

  constructor(
    private _router: Router,
    private _auth: AuthServices,
    private _storage: StorageService,
  ) {}

  ngOnInit(): void {
    this.initFormLogin();
  }

  initFormLogin(): void {
    this.login = new FormGroup({
      user_name: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
    });
  }

  sendLogin():void {
    if (this.login.invalid) {
      this.login.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const data = {
      email: this.login.value.user_name,
      password: this.login.value.password,
    };

    if (data.email == "doctor@gmail.com" && data.password == "12345678") {
      this._storage.set('doctor', "true");
    }

    console.log(data);
    this._storage.set('user', "login");
    this._router.navigateByUrl('/home').then();
    this._auth.login(data).subscribe({
      next: value => {
        console.log(value)
        alert("siuuuuuuu")

      },
      error: () => {
        alert("noooooooooooo");
      }
    })




    this.isLoading = false;


  }
}
