import { Component } from '@angular/core';
import { ContactService } from './contact.service'; // Certifique-se de ter o caminho correto para o serviço
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  sendEmail() {
    const apiUrl = 'http://localhost:5000/api/contact/send';

    this.http.post(apiUrl, this.contactData).subscribe({
      next: () => alert('Mensagem enviada com sucesso!'),
      error: () => alert('Erro ao enviar mensagem. Tente novamente.')
    });
  }
}
