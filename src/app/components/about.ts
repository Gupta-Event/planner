import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="w-full py-16 md:py-32 bg-gradient-to-b from-[#0D0D0D] via-black to-[#0D0D0D] relative px-4 md:px-8">
      <!-- Background gradient effect -->
      <div class="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none"></div>
      
      <div class="relative z-10 container mx-auto">
        <!-- Title -->
        <h2 class="text-3xl md:text-5xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-pulse">
          About Us
        </h2>

        <!-- Divider -->
        <div class="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-12 md:mb-16"></div>

        <!-- Two-column layout -->
        <div class="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <!-- Left: Text -->
          <div class="flex-1 space-y-6 animate-fade-in-up" style="animation-delay: 0.1s">
            <p class="text-base md:text-lg text-white font-light leading-relaxed">
              Welcome to <span class="font-bold text-gold-500">Gupta Event Planner</span>! We specialize in creating <span class="font-semibold text-gold-400">grand, unforgettable experiences</span> with our signature event effects:
            </p>

            <ul class="list-disc list-inside text-base md:text-lg text-white font-light space-y-2">
              <li>Mirror Entry & Grand Entrances</li>
              <li>Pyro Gun & Smoke Pyro Effects</li>
              <li>Pyro Entry & Firework Showcases</li>
              <li>Bubbles, Dry Ice, Snow & Blower Machines</li>
              <li>Ring Ceremony & Wedding Celebrations</li>
              <li>Birthday Parties & Baby Showers</li>
               <li>Luxury Anniversary Celebrations</li>
            </ul>

            <p class="text-base md:text-lg text-white font-light leading-relaxed">
              Every event is curated with <span class="font-semibold text-gold-400">precision, creativity, and luxury</span>. We ensure your celebration leaves a lasting impression on your guests, making it truly magical.
            </p>
          </div>

          <!-- Right: Image -->
          <div class="flex-1 animate-fade-in-up" style="animation-delay: 0.2s">
            <div class="relative w-full aspect-square rounded-xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-gold-500 to-gold-600 p-0.5 shadow-2xl hover:shadow-2xl hover:shadow-gold-500/70 transition-all duration-500 group">
              <img
                src="https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760777094/310972723_511894490947080_6518641946059095389_n_iwbcgo.jpg"
                alt="About Us"
                class="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {}
