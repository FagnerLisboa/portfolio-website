import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiUrl}/api/contact`; // Adicione o endpoint correto aqui

  constructor(private http: HttpClient) {}

  sendMessage(contactData: any) {
    return this.http.post(this.apiUrl, contactData);
  }
}
