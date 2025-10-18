import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="w-full py-20 md:py-32 bg-gradient-to-b from-luxe-black via-black to-luxe-black relative px-4 md:px-8 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-gold-500/5 via-transparent to-transparent pointer-events-none"></div>
      <div class="container mx-auto relative z-10">
        <h2 class="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-pulse">
          Our Expertise
        </h2>

        <div class="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-16"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          <div
            *ngFor="let service of services; let i = index"
            class="group relative p-8 border-2 border-transparent bg-gradient-to-br from-gold-500/20 to-transparent rounded-xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold-500/50 animate-scale-in stagger-item"
            [style.animation-delay]="i * 0.15 + 's'"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5 pointer-events-none">
              <div class="absolute inset-0 bg-black rounded-xl"></div>
            </div>

            <div class="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div class="relative z-10 text-center space-y-4">
              <!-- Title -->
              <h3 class="text-2xl md:text-3xl font-playfair font-bold text-gold-500">{{ service.title }}</h3>
              
              <!-- Description -->
              <p class="text-gray-300 text-sm md:text-base font-light">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent {
  services: Service[] = [
    { title: 'Weddings', description: 'Elegant weddings with mirror entry, pyro effects, and luxurious decoration.' },
    { title: 'Pyro Entry', description: 'Spectacular pyro entrances to make every event unforgettable.' },
    { title: 'Smoke & Dry Ice', description: 'Create magical moments with smoke, dry ice, and bubble effects.' },
    { title: 'Mirror Entry', description: 'Grand mirror entryways for weddings and special celebrations.' },
    { title: 'Birthday Parties', description: 'Fun and lively birthday celebrations with custom effects.' },
    { title: 'Baby Showers', description: 'Beautifully planned baby shower events with memorable decor.' },
    { title: 'Ring Ceremony', description: 'Memorable ring ceremonies with stunning effects and setups.' },
    { title: 'Custom Decor', description: 'Bespoke decor tailored to your theme and luxury standards.' },
    { title: 'Special Events', description: 'Grand events for anniversaries, festivals, or any occasion.' }
  ];
}
