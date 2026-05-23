import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, MonitorSmartphone, Server, Database, Code, 
  ShieldCheck, TestTube2, BrainCircuit, Network, Cable, Gauge, 
  Key, Boxes, Zap, Blocks, Repeat, CheckCircle 
} from 'lucide-angular';

export interface SkillItem {
  name: string;
  devicon?: string;
  lucideIcon?: any;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  technicalSkills: SkillItem[] = [
    { name: 'Python', devicon: 'devicon-python-plain colored' },
    { name: 'JavaScript', devicon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', devicon: 'devicon-typescript-plain colored' },
    { name: 'Java', devicon: 'devicon-java-plain colored' },
    { name: 'SQL', lucideIcon: Database },
    { name: 'Angular', devicon: 'devicon-angular-plain colored' },
    { name: 'React.js', devicon: 'devicon-react-original colored' },
    { name: 'Tailwind CSS', devicon: 'devicon-tailwindcss-original colored' },
    { name: 'Bootstrap', devicon: 'devicon-bootstrap-plain colored' },
    { name: 'HTML5', devicon: 'devicon-html5-plain colored' },
    { name: 'Django', devicon: 'devicon-django-plain colored' },
    { name: 'PostgreSQL', devicon: 'devicon-postgresql-plain colored' },
    { name: 'MySQL', devicon: 'devicon-mysql-original colored' },
    { name: 'REST APIs', lucideIcon: Network },
    { name: 'JWT Auth', lucideIcon: Key },
    { name: 'OAuth2', devicon: 'devicon-oauth-plain colored' }
  ];

  toolsAndPlatforms: SkillItem[] = [
    { name: 'Git', devicon: 'devicon-git-plain colored' },
    { name: 'GitHub', devicon: 'devicon-github-original' },
    { name: 'Postman', devicon: 'devicon-postman-plain colored' },
    { name: 'Unit Testing', lucideIcon: CheckCircle },
    { name: 'Query Optimization', lucideIcon: Gauge },
    { name: 'Microservices', lucideIcon: Boxes },
    { name: 'Component-Based', lucideIcon: Blocks },
    { name: 'Agile/Scrum', lucideIcon: Repeat }
  ];
}
