import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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

  registerForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    segundo_nombre: new FormControl(''),
    correo: new FormControl('', [Validators.required, Validators.email]),
    rol: new FormControl('', Validators.required),
    ciudad: new FormControl(''),
    celular: new FormControl(''),
    direccion: new FormControl('')
  });

  constructor(private router: Router) {}

  sendRegister(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      // 🔁 luego aquí llamas a tu backend
      this.router.navigateByUrl('/login');
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
