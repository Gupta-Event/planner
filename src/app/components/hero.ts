import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="home"
      class="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <!-- Background gradient and texture -->
      <div
        class="absolute inset-0 bg-gold-gradient opacity-20"
      ></div>

      <!-- Decorative gold accent lines -->
      <div class="absolute top-0 left-1/4 w-px h-1/3 bg-gradient-to-b from-gold-500 to-transparent"></div>
      <div class="absolute bottom-0 right-1/4 w-px h-1/3 bg-gradient-to-t from-gold-500 to-transparent"></div>

      <!-- Floating particles -->
      <div
        *ngFor="let particle of particles"
        class="particle bg-gold-500"
        [style.width.px]="particle.size"
        [style.height.px]="particle.size"
        [style.left.%]="particle.x"
        [style.top.%]="particle.y"
        [style.animation-duration.s]="particle.duration"
      ></div>

      <!-- Content -->
      <div class="relative z-10 container mx-auto px-4 md:px-8 text-center space-y-8 animate-fade-in">
        <!-- Main Headline -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight drop-shadow-2xl bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-pulse">
          Turning Your Moments into Memories
        </h1>

        <!-- Sub-headline -->
        <p class="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed backdrop-blur-sm px-6 py-3 rounded-xl border border-gold-500/20 hover:border-gold-500/50 transition-all duration-500">
          Where creativity meets flawless execution.
        </p>

        <!-- Decorative divider -->
        <div class="flex justify-center">
          <div class="w-24 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <svg
          class="w-6 h-6 text-gold-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent implements OnInit {
  particles: Particle[] = [];

  ngOnInit() {
    this.generateParticles();
  }

  generateParticles() {
    // Generate random particles for sparkle effect
    for (let i = 0; i < 15; i++) {
      this.particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
      });
    }
  }
}
