import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatResponse } from '../../../../services/chat.service';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './Page1.html',
  styleUrl: './Page1.scss'
})
export class Page1 {

  userInput: string = '';

  messages: { from: 'user' | 'bot'; text: string }[] = [
    { from: 'bot', text: '👋 Hola, soy el asistente de Help Medic.' }
  ];

  iaInfo: string[] = [];

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    if (!this.userInput.trim()) return;

    const question = this.userInput;
    this.messages.push({ from: 'user', text: question });
    this.userInput = '';

    this.chatService.sendMessage(question).subscribe({
      next: (res: ChatResponse) => {
        this.messages.push({
          from: 'bot',
          text: res.respuesta
        });

        this.updateInfo(res.respuesta);
      },
      error: () => {
        this.messages.push({
          from: 'bot',
          text: '❌ Error al conectar con el asistente'
        });
      }
    });
  }

  updateInfo(text: string): void {
    this.iaInfo = text
      .split('\n')
      .map(t => t.trim())
      .filter(t => t.length > 0);
  }
}
