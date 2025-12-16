import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AppointmentService} from '@app/modules/administration/service/appointment';

@Component({
  selector: 'app-appointment',
  imports: [
    ReactiveFormsModule
  ],
  providers:[
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss'
})
export class Appointment implements OnInit {

  appointments: any[] = [
    // {
    //   dia_cita: 'Viernes, 19 De Diciembre De 2025',
    //   hora_cita: '14:30',
    //   estado: 'Pendiente',
    //   motivo: 'Consulta de rutina',
    // },
    // {
    //   dia_cita: 'Martes, 14 De Enero De 2025',
    //   hora_cita: '10:00',
    //   estado: 'Confirmada',
    //   motivo: 'Control de presión arterial',
    // },
  ]

  form!: FormGroup
  showAppointments: boolean = false;

  constructor(private fb: FormBuilder,
              private _cita: AppointmentService) {
  }

  ngOnInit() {
    this.initForm();
    this.getAllCitas();
  }

  getAllCitas(): void {
    this._cita.getAllCitas().subscribe({
      next: data => {
        this.appointments = data;
      }
      }
    )
  }

  initForm():void{
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

    const value = this.form.value;


    // this.formatDateLarge(value.dia_cita)

    const payload = {
      dia_cita: value.dia_cita,
      hora_cita: `${value.hora_cita}:00`,
      motivo: value.motivo,
    }

    this._cita.reguisterCitas(payload).subscribe({
      next: value => {
        alert("siuuuuuuu")

      },
      error: () => {
        alert("noooooooooooo");
      }
    })

    // this.appointments.push(payload);

    console.log( payload)
  }

  formatDateLarge(fechaValue: string): string {
    if (!fechaValue) return '';

    const [year, month, day] = fechaValue.split('-');

    const fecha = new Date(
      Number(year),
      Number(month) - 1,
      Number(day)
    );

    return fecha
      .toLocaleDateString('es-CO', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
      .replace(/\b\w/g, l => l.toUpperCase());
  }


}
