import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, GraduationCap, Calendar } from 'lucide-angular';

interface Education {
  school: string;
  degree: string;
  year: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  readonly GraduationCap = GraduationCap;
  readonly Calendar = Calendar;

  educationList: Education[] = [
    {
      school: 'SGI, Kolhapur, Maharashtra',
      degree: 'B.E. (Computer Science and Engineering)',
      year: '2017 - 2022'
    },
    {
      school: 'VCK, Kolhapur, Maharashtra',
      degree: 'XII',
      year: '2017'
    },
    {
      school: 'HMEM School, Peth Vadgaon, Maharashtra',
      degree: 'X',
      year: '2015'
    }
  ];
}
