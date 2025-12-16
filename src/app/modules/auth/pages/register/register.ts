import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthServices} from '@app/modules/auth/services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  public register: FormGroup = new FormGroup({});
  isLoading = false;

  constructor(
    private _router: Router,
    private _auth: AuthServices,
    ) {}

  ngOnInit(): void {
    this.initFormRegister();
  }

  initFormRegister(): void {
    this.register = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.maxLength(30),]),
      segundo_nombre: new FormControl('', [Validators.required, Validators.maxLength(30),]),
      celular: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15),]),
      direccion: new FormControl('', [Validators.required, Validators.maxLength(50),]),
      ciudad: new FormControl('', [Validators.required, Validators.maxLength(30),]),
      correo: new FormControl('', [Validators.required, Validators.email,]),
    });
  }

  sendRegister(): void {
    // if (this.register.invalid) {
    //   this.register.markAllAsTouched();
    //   return;
    // }

    this.isLoading = true;

    const data = {
      id_usuario: "1",
      nombre: this.register.value.nombre,
      segundo_nombre: this.register.value.segundo_nombre,
      celular: this.register.value.celular,
      gmail: "ASD",
      rol: "paciente",
      direccion: this.register.value.direccion,
      ciudad: this.register.value.ciudad,
      correo: this.register.value.correo,
    };

    console.log(data);

    this.isLoading = false;

    this._auth.register(data).subscribe({
      next: value => {
        console.log(value)
        alert("siuuuuuuu")
      },
      error: () => {
        alert("noooooooooooo");
      }
    })

    // this._router.navigateByUrl('/login').then();
  }
}
