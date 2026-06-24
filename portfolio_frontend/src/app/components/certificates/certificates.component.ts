import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Award, Calendar, Eye, X, ExternalLink } from 'lucide-angular';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
  highlights: string[];
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  readonly Award = Award;
  readonly Calendar = Calendar;
  readonly Eye = Eye;
  readonly X = X;
  readonly ExternalLink = ExternalLink;

  selectedImage: string | null = null;

  certificates: Certificate[] = [
    {
      title: 'AI Tools & ChatGPT Workshop',
      issuer: 'be10x',
      date: 'April 5, 2026',
      image: '/be10x_certificate.png',
      highlights: [
        'Learned to create presentations using AI in under 5 minutes.',
        'Mastered data analysis using AI tools in under 30 minutes.',
        'Acquired skills to code and debug using AI in under 10 minutes.'
      ]
    },
    {
      title: 'MySQL Database Development Mastery',
      issuer: 'Udemy',
      date: 'October 7, 2022',
      image: '/udemy_mysql_certificate.png',
      credentialUrl: 'https://ude.my/UC-f196dc00-a832-4f45-aebe-1d6c443e6225',
      highlights: [
        'Completed 4.5 total hours of database development training.',
        'Mastered relational database concepts, SQL querying, and database design.',
        'Taught by instructors Trevoir Williams, Learn IT University, and Andrii Piatakha.'
      ]
    }
  ];

  openModal(image: string) {
    this.selectedImage = image;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedImage = null;
    document.body.style.overflow = '';
  }
}
