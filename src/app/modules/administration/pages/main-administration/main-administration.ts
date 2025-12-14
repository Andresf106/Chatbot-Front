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

}
