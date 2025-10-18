import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  iconUrl: string; // image URL instead of emoji
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="w-full bg-gradient-to-b from-black to-[#0D0D0D] border-t-2 border-transparent bg-clip-padding"
      [style.border-image]="'linear-gradient(90deg, transparent, #D4AF37, transparent) 1'">
      <div class="container mx-auto py-12 md:py-16">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          <!-- Brand -->
          <div class="space-y-4">
            <h3 class="text-2xl font-playfair font-bold text-gold-500">
              Gupta Event Planner
            </h3>
            <p class="text-gray-400 font-light text-sm leading-relaxed">
              Crafting unforgettable moments with creativity, passion, and precision.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h4 class="text-white font-poppins font-semibold">Quick Links</h4>
            <ul class="space-y-2 text-gray-400 font-light text-sm">
              <li><a href="#home" class="hover:text-gold-500 transition-colors duration-300">Home</a></li>
              <li><a href="#about" class="hover:text-gold-500 transition-colors duration-300">About Us</a></li>
              <li><a href="#services" class="hover:text-gold-500 transition-colors duration-300">Services</a></li>
              <li><a href="#contact" class="hover:text-gold-500 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <!-- Social Media -->
          <div class="space-y-4">
            <h4 class="text-white font-poppins font-semibold">Follow Us</h4>
            <div class="flex gap-4">
              <a
                *ngFor="let social of socialLinks"
                [href]="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 rounded-full border border-gold-500/40 flex items-center justify-center hover:border-gold-500 hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                [title]="social.name"
              >
                <img [src]="social.iconUrl" [alt]="social.name" class="w-6 h-6"/>
              </a>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-8"></div>

        <!-- Copyright -->
        <div class="text-center text-gray-500 font-light text-sm">
          <p>© 2025 Gupta Event Planner. Designed with elegance.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
      url: 'https://www.instagram.com/gupta_event?igsh=MWMzNW91MzMwcmUxaA==',
    },
    {
      name: 'WhatsApp',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
      url: 'https://wa.me/919098086210',
    },
  ];
}
