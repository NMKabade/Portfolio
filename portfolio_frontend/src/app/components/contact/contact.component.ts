import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2, XCircle } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Send = Send;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly CheckCircle2 = CheckCircle2;
  readonly XCircle = XCircle;

  private http = inject(HttpClient);

  contactInfo = {
    email: 'kabadeniranjan27@gmail.com',
    phone: '+91-9762764943',
    location: 'Pune, Maharashtra, IN'
  };

  socials = [
    { icon: Github, link: 'https://github.com/NMKabade', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/niranjan-kabade', label: 'LinkedIn' }
  ];

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit() {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.http.post('http://localhost:8000/api/contact/', this.formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.formData = { name: '', email: '', message: '' };
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        this.isSubmitting = false;
        this.submitError = true;
        
        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      }
    });
  }
}
