import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Briefcase, Calendar, MapPin } from 'lucide-angular';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly Briefcase = Briefcase;
  readonly Calendar = Calendar;
  readonly MapPin = MapPin;

  experiences: Experience[] = [
    {
      company: 'Swatsan Tech Pvt. Ltd.',
      role: 'Junior Full Stack Developer - Python Backend & Angular',
      period: 'January 2025 - February 2026',
      location: 'Pune, India',
      achievements: [
        'Engineered scalable SaaS platforms utilizing Django, Angular, and PostgreSQL, ensuring robust data management and high performance.',
        'Architected and managed backend systems using Django REST Framework; performed rigorous API testing and schema debugging via Postman.',
        'Designed and implemented new features and pages for the company website, directly improving user engagement metrics.',
        'Designed Celery + Redis async task execution for concurrent report generation and PostgreSQL query optimization - achieving 99% uptime across all services.'
      ]
    },
    {
      company: 'Auspian Technologies',
      role: 'Web Developer - React.js & REST API Integration',
      period: 'August 2023 - September 2024',
      location: 'Kolhapur, India',
      achievements: [
        'Engineered and maintained scalable web applications using React.js for frontend and Java/MySQL for robust backend services.',
        'Developed responsive, cross-browser compatible interfaces using HTML, CSS, and JavaScript, ensuring a seamless user experience across devices.',
        'Collaborated on core application architecture and feature implementation with a focus on high-performance optimization.',
        'Ensured application stability by actively debugging, testing, and resolving production issues during the full development lifecycle.'
      ]
    }
  ];
}
