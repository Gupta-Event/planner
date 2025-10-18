import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="w-full py-20 md:py-32 bg-gradient-to-b from-black via-[#0D0D0D] to-black relative px-4 md:px-8 overflow-hidden">
      <!-- Multiple gradient overlays -->
      <div class="absolute inset-0 bg-gradient-to-b from-gold-500/10 via-transparent to-gold-500/5 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-transparent pointer-events-none"></div>

      <div class="container mx-auto relative z-10">
        <!-- Divider line above -->
        <div class="w-32 h-0.5 mx-auto mb-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent glow-gold"></div>

        <!-- Title -->
        <h2 class="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-pulse">
          Let's Connect
        </h2>

        <!-- Divider -->
        <div class="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-16"></div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <!-- Contact Form -->
          <div class="animate-fade-in-up glass-effect p-8" style="animation-delay: 0.1s">
            <form (ngSubmit)="handleSubmit()" class="space-y-6">
              <!-- Name Input -->
              <div>
                <label class="block text-gold-300 font-poppins text-sm mb-2">Name</label>
                <input
                  type="text"
                  [(ngModel)]="formData.name"
                  name="name"
                  required
                  class="w-full bg-white/10 border-2 border-gold-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:shadow-lg focus:shadow-gold-500/30 transition-all duration-300 backdrop-blur-sm hover:border-gold-500/50 hover:bg-white/15"
                  placeholder="Your name"
                />
              </div>

              <!-- Email Input -->
              <div>
                <label class="block text-gold-300 font-poppins text-sm mb-2">Email</label>
                <input
                  type="email"
                  [(ngModel)]="formData.email"
                  name="email"
                  required
                  class="w-full bg-white/10 border-2 border-gold-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:shadow-lg focus:shadow-gold-500/30 transition-all duration-300 backdrop-blur-sm hover:border-gold-500/50 hover:bg-white/15"
                  placeholder="your@email.com"
                />
              </div>

              <!-- Phone Input -->
              <div>
                <label class="block text-gold-300 font-poppins text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  [(ngModel)]="formData.phone"
                  name="phone"
                  required
                  class="w-full bg-white/10 border-2 border-gold-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:shadow-lg focus:shadow-gold-500/30 transition-all duration-300 backdrop-blur-sm hover:border-gold-500/50 hover:bg-white/15"
                  placeholder="+91 98765 43210"
                />
              </div>

              <!-- Message Input -->
              <div>
                <label class="block text-gold-300 font-poppins text-sm mb-2">Message</label>
                <textarea
                  [(ngModel)]="formData.message"
                  name="message"
                  required
                  rows="5"
                  class="w-full bg-white/10 border-2 border-gold-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 focus:shadow-lg focus:shadow-gold-500/30 transition-all duration-300 backdrop-blur-sm resize-none hover:border-gold-500/50 hover:bg-white/15"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-gold-500 text-luxe-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-500/50"
              >
                Send Message
              </button>

              <!-- Success Message -->
              <p
                *ngIf="submitSuccess()"
                class="text-gold-500 text-center font-poppins text-sm"
              >
                ✓ Thank you! We'll be in touch soon.
              </p>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-10 animate-fade-in-up" style="animation-delay: 0.2s">
            <!-- Address -->
            <div class="flex gap-6 group">
              <div class="text-gold-500 text-3xl flex-shrink-0">📍</div>
              <div>
                <p class="text-gold-500 font-poppins font-semibold text-lg">Address</p>
                <p class="text-gray-300 mt-2 font-light">Baba Shree Chamanadas Ji Chouk,
Gupta Bhawan. Village Bamnala,
Dist. Khargone, M.P. 451331</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex gap-6 group">
              <div class="text-gold-500 text-3xl flex-shrink-0">📞</div>
              <div>
                <p class="text-gold-500 font-poppins font-semibold text-lg">Phone</p>
                <p class="text-gray-300 mt-2 font-light">+91 90980 86210</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex gap-6 group">
              <div class="text-gold-500 text-3xl flex-shrink-0">✉️</div>
              <div>
                <p class="text-gold-500 font-poppins font-semibold text-lg">Email</p>
                <p class="text-gray-300 mt-2 font-light">yogeerajgupta2@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  submitSuccess = signal(false);

  handleSubmit() {
    // Simple form validation
    if (this.formData.name && this.formData.email && this.formData.phone && this.formData.message) {
      // In a real app, you would send this data to a server
      console.log('Form submitted:', this.formData);

      // Show success message
      this.submitSuccess.set(true);

      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
      };

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);
    }
  }
}
