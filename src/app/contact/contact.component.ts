import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { EmailJSResponseStatus } from 'emailjs-com';

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
    this.contactService.sendMessage(this.contactData)
      .then((response: EmailJSResponseStatus) => {
        alert('Mensagem enviada com sucesso!');
        this.contactData = { name: '', email: '', subject: '', body: '' }; // Limpa o formulário
      })
      .catch((error) => {
        console.error('Erro ao enviar mensagem:', error.text);
        alert('Erro ao enviar mensagem. Tente novamente.');
      });
  }
}
