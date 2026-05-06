import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MonitorSmartphone, Server, Database, Code, ShieldCheck, TestTube2, BrainCircuit } from 'lucide-angular';

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Java', 'SQL']
    },
    {
      title: 'Frontend',
      icon: MonitorSmartphone,
      skills: ['Angular', 'React.js', 'Tailwind CSS', 'Bootstrap', 'HTML5']
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Django', 'REST APIs', 'Celery', 'WebSockets']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MySQL', 'Redis', 'Query Optimization']
    },
    {
      title: 'Auth & Security',
      icon: ShieldCheck,
      skills: ['JWT Authentication', 'OAuth2 (familiar)']
    },
    {
      title: 'Testing & Tools',
      icon: TestTube2,
      skills: ['Postman', 'Unit Testing', 'Git', 'GitHub']
    },
    {
      title: 'Concepts',
      icon: BrainCircuit,
      skills: ['Microservices', 'Event-Driven', 'Component-Based', 'Agile/Scrum']
    }
  ];
}
