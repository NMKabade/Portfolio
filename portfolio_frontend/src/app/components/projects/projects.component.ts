import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ExternalLink, Github, FolderGit2 } from 'lucide-angular';

interface Project {
  title: string;
  subtitle?: string;
  techStack: string[];
  description: string[];
  github?: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;
  readonly FolderGit2 = FolderGit2;

  projects: Project[] = [
    {
      title: 'E-Commerce Engine',
      techStack: ['Angular', 'Django REST', 'PostgreSQL', 'Redis', 'Celery', 'JWT', 'Tailwind CSS'],
      description: [
        'Architected a decoupled e-commerce system using Angular for the frontend and multiple Django microservices for Auth, Product, and Order management.',
        'Integrated Angular Interceptors to manage JWT-based authentication across services and utilized RxJS for real-time state management of the shopping cart.',
        'Engineered an asynchronous order processing pipeline using Celery and Redis, ensuring 99.9% fault tolerance during high-traffic checkout events.',
        'Designed a responsive, modular UI with Tailwind CSS and Angular Material, implementing lazy loading to optimize initial page load performance.'
      ]
    },
    {
      title: 'SaaS Admin Dashboard',
      subtitle: 'Full Stack Component Library & API Integration Toolkit',
      techStack: ['React.js', 'TypeScript', 'Redux', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
      description: [
        'Security Auth: Engineered a robust Role-Based Access Control (RBAC) system using JWT for secure user authentication and authorization.',
        'State Management: Utilized Redux Toolkit for efficient global state management, ensuring seamless data flow across complex user and subscription modules.',
        'Scalable UI: Developed a library of reusable UI components (data tables, filters, pagination, and modals) to maintain design consistency and speed up development.',
        'Performance Optimization: Leveraged lazy loading and code-splitting techniques to reduce initial load times and improve overall application responsiveness.'
      ]
    }
  ];
}
