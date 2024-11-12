import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private serviceId = 'service_contact';
  private templateId = 'template_j7ru2k2';
  private userId = 'ErgbHDcTTFYAuPSUR';

  sendMessage(contactData: any) {
    return emailjs.send(
      this.serviceId,
      this.templateId,
      {
        from_name: contactData.name,
        from_email: contactData.email,
        subject: contactData.subject,
        message: contactData.body
      },
      this.userId
    );
  }
}
