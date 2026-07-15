import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  readonly Menu = Menu;
  readonly X = X;

  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'home';

  navLinks = [
    { id: 'home', name: 'Home', target: '#home' },
    { id: 'about', name: 'About', target: '#about' },
    { id: 'skills', name: 'Skills', target: '#skills' },
    { id: 'experience', name: 'Experience', target: '#experience' },
    { id: 'projects', name: 'Projects', target: '#projects' },
    { id: 'education', name: 'Education', target: '#education' },
    { id: 'certificates', name: 'Certificates', target: '#certificates' },
    { id: 'contact', name: 'Contact', target: '#contact' }
  ];

  ngOnInit() {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
    
    const sections = this.navLinks.map(link => link.id);
    const scrollPosition = window.scrollY + 100; // Adjusted for precise detection at the top

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          this.activeSection = sectionId;
        }
      }
    }
    
    if (window.scrollY < 50) {
      this.activeSection = 'home';
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(target: string, id: string) {
    this.isMenuOpen = false;
    this.activeSection = id;
    
    if (target === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(target);
    if (element) {
      // Scroll exactly to the top of the element to hide the previous section
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
