import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData = {
    name: '', 
    email: '',
    subject: '', 
    body: ''    
  };

  constructor(private contactService: ContactService) {}

  sendEmail() {
    this.contactService.sendMessage(this.contactData).subscribe({
      next: () => alert('Mensagem enviada com sucesso!'),
      error: () => alert('Erro ao enviar mensagem. Tente novamente.')
    });
  }
}
