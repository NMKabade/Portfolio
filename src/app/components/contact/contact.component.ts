import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! This is a demo form.');
    this.formData = { name: '', email: '', message: '' };
  }
}
