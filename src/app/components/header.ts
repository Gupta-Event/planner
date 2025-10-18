import { Component, OnInit, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="isScrolled()" class="header-scroll bg-transparent transition-all duration-300">
      <nav class="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <!-- Monogram Logo -->
     <a href="#home" class="flex items-center">
  <img src="https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760779243/Gupta_Ev_ent_1_ttxdoo.png" alt="Gupta Event Planner" class="h-10 md:h-12">
</a>


        <!-- Desktop Navigation -->
        <ul class="hidden md:flex gap-8 text-white font-poppins text-sm">
          <li>
            <a href="#home" class="relative group">
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#about" class="relative group">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#services" class="relative group">
              Services
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#gallery" class="relative group">
              Gallery
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a href="#contact" class="relative group">
              Contact
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          (click)="toggleMobileMenu()"
          class="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span [class.rotate-45]="mobileMenuOpen()" class="w-6 h-0.5 bg-gold-500 transition-transform"></span>
          <span [class.opacity-0]="mobileMenuOpen()" class="w-6 h-0.5 bg-gold-500 transition-opacity"></span>
          <span [class.-rotate-45]="mobileMenuOpen()" class="w-6 h-0.5 bg-gold-500 transition-transform"></span>
        </button>
      </nav>

      <!-- Mobile Navigation -->
      <div
        *ngIf="mobileMenuOpen()"
        class="md:hidden bg-luxe-black border-t border-gold-500/20"
      >
        <ul class="flex flex-col gap-4 p-4 text-white font-poppins">
          <li>
            <a
              href="#home"
              (click)="toggleMobileMenu()"
              class="block hover:text-gold-500 transition-colors duration-300 text-sm"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              (click)="toggleMobileMenu()"
              class="block hover:text-gold-500 transition-colors duration-300 text-sm"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              (click)="toggleMobileMenu()"
              class="block hover:text-gold-500 transition-colors duration-300 text-sm"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              (click)="toggleMobileMenu()"
              class="block hover:text-gold-500 transition-colors duration-300 text-sm"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              (click)="toggleMobileMenu()"
              class="block hover:text-gold-500 transition-colors duration-300 text-sm"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  ngOnInit() {
    // Initial check in case page is already scrolled
    this.isScrolled.set(window.scrollY > 50);
  }

  getHeaderClass() {
    if (this.isScrolled()) {
      return 'bg-luxe-black/95 backdrop-blur-md shadow-lg shadow-gold-500/10';
    }
    return 'bg-transparent';
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
}
