import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  imports: [CommonModule], // Asegúrate de importar CommonModule aquí
})
export class AlertComponent { @Output() sendAlert = new EventEmitter<{ message: string, to: string }>();

sendVoiceAlert() { const message = prompt('Escribe tu alerta:');
   if (message) { this.sendAlert.emit({ message, to: 'MainCamera' });
   }
   } 
  }
