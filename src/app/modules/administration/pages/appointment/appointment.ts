import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-appointment',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss'
})
export class Appointment {

  appointments: any[] = [
    {
      date: 'Viernes, 19 De Diciembre De 2025',
      time: '14:30',
      status: 'Pendiente',
      reason: 'Consulta de rutina',
    },
    {
      date: 'Martes, 14 De Enero De 2025',
      time: '10:00',
      status: 'Confirmada',
      reason: 'Control de presión arterial',
    },
  ]

  form: FormGroup
  showAppointments: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dia_cita: ['', Validators.required],
      hora_cita: ['', Validators.required],
      motivo: ['', [Validators.required, Validators.minLength(3)]],
      estado: ['pendiente'], // fijo por ahora
    })
  }
  openCreateAppointments() {
    this.showAppointments = true;
  }

  closeCreateAppointments() {
    this.showAppointments = false;
  }


  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    const value = this.form.value

    const payload = {
      dia_cita: value.dia_cita,
      hora_cita: `${value.hora_cita}:00`,
      motivo: value.motivo,
      estado: value.estado,
    }

    console.log( payload)
  }

}
