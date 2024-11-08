import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:5001/api/contact/send';

  constructor(private http: HttpClient) {}

  sendMessage(contactData: any) {
    return this.http.post(this.apiUrl, contactData);
  }
}
