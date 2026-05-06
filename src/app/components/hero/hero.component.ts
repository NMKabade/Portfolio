import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Download, Mail, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly Download = Download;
  readonly Mail = Mail;
  readonly MapPin = MapPin;

  displayText = '';
  titles = [
    'Full-Stack Developer',
    'Building SaaS Applications',
    'Angular + React + Django'
  ];

  private currentTitleIndex = 0;
  private isDeleting = false;
  private typingTimeout: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
  }

  type() {
    const currentTitle = this.titles[this.currentTitleIndex];

    if (this.isDeleting) {
      this.displayText = currentTitle.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = currentTitle.substring(0, this.displayText.length + 1);
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.displayText === currentTitle) {
      typeSpeed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      typeSpeed = 300;
    }

    this.typingTimeout = setTimeout(() => this.type(), typeSpeed);
  }

  scrollTo(target: string, id: string) {
    const element = document.querySelector(target);
    if (element) {
      const offset = 180;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
