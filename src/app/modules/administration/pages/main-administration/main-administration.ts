import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-main-administration',
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './main-administration.html',
  styleUrl: './main-administration.scss'
})
export class MainAdministration {

  features = [
    {
      icon: 'pi pi-cog',
      title: 'IA Inteligente',
      description:
        'Nuestra IA aprende tus patrones y te sugiere los mejores horarios para tus citas médicas.',
    },
    {
      icon: 'pi pi-calendar',
      title: 'Gestión de Citas',
      description:
        'Programa y gestiona todas tus citas médicas en un calendario intuitivo y fácil de usar.',
    },
    {
      icon: 'pi pi-bell',
      title: 'Recordatorios',
      description:
        'Recibe notificaciones automáticas antes de tus citas y cuando debas tomar medicamentos.',
    },
    {
      icon: 'pi pi-file',
      title: 'Historial Médico',
      description:
        'Mantén un registro completo de todas tus consultas, diagnósticos y tratamientos.',
    },
    {
      icon: 'pi pi-shield',
      title: '100% Seguro',
      description:
        'Tus datos médicos están protegidos con encriptación de nivel empresarial.',
    },
    {
      icon: 'pi pi-clock',
      title: 'Disponible 24/7',
      description:
        'Accede a tu información médica y agenda citas en cualquier momento del día.',
    },
  ];

  steps = [
    {
      icon: 'pi pi-user-plus',
      step: '01',
      title: 'Crea tu cuenta',
      description:
        'Regístrate en minutos y completa tu perfil médico básico de forma segura.',
    },
    {
      icon: 'pi pi-calendar-plus',
      step: '02',
      title: 'Agenda tu cita',
      description:
        'Usa nuestra IA para encontrar el mejor horario y especialista para ti.',
    },
    {
      icon: 'pi pi-bell',
      step: '03',
      title: 'Recibe recordatorios',
      description:
        'Mantente al día con notificaciones inteligentes sobre citas y medicamentos.',
    },
    {
      icon: 'pi pi-check-circle',
      step: '04',
      title: 'Asiste confiado',
      description:
        'Ten toda tu información médica organizada y accesible en cualquier momento.',
    },
  ];

  isOpen = false
  inputValue = ''

  messages: any[] = [
    {
      id: 1,
      text: '¡Hola! ¿En qué puedo ayudarte hoy?',
      sender: 'agent',
      timestamp: new Date(),
    },
  ]

  toggle() {
    this.isOpen = !this.isOpen
  }

  send() {
    if (!this.inputValue.trim()) return

    this.messages.push({
      id: this.messages.length + 1,
      text: this.inputValue,
      sender: 'user',
      timestamp: new Date(),
    })

    this.inputValue = ''

    setTimeout(() => {
      this.messages.push({
        id: this.messages.length + 1,
        text: 'Gracias por tu mensaje. Un miembro del equipo te responderá pronto.',
        sender: 'agent',
        timestamp: new Date(),
      })
    }, 1000)
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

}
