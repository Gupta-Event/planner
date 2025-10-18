import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  title: string;
  image: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      id="gallery"
      class="w-full py-20 md:py-32 bg-gradient-to-b from-black via-luxe-black to-black relative px-4 md:px-8 overflow-hidden"
    >
      <!-- Background gradient -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5 pointer-events-none"
      ></div>

      <div class="container mx-auto relative z-10">
        <!-- Title -->
        <h2
          class="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-pulse"
        >
          Our Events
        </h2>

        <!-- Divider -->
        <div class="section-divider"></div>

        <!-- Gallery Grid -->
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <div
            *ngFor="let item of galleryItems; let i = index"
            class="relative aspect-square rounded-xl overflow-hidden group cursor-pointer animate-scale-in border border-gold-500/20 hover:border-gold-500/50 transition-all duration-500"
            [style.animation-delay]="i * 0.12 + 's'"
            (click)="openLightbox(i)"
          >
            <!-- Image -->
            <img
              [src]="item.image"
              [alt]="item.title"
              class="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110"
            />

            <!-- Gold hover overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-gold-500/40 via-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
            ></div>

            <!-- Title on hover -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <p
                class="text-white font-playfair font-bold text-xl text-center px-4 transform group-hover:scale-100 scale-90"
              >
                {{ item.title }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox Modal -->
      <div
        *ngIf="lightboxOpen()"
        class="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-black/80 z-50 animate-fade-in"
        (click)="closeLightbox()"
      >
        <div
          class="relative max-w-3xl w-full p-4 border-2 border-gold-500/50 bg-gradient-to-br from-black via-luxe-dark to-black rounded-2xl animate-scale-in"
          (click)="$event.stopPropagation()"
        >
          <!-- Close Button -->
          <button
            class="absolute top-4 right-4 text-3xl text-gold-400 hover:scale-125 transition-transform"
            (click)="closeLightbox()"
          >
            ✕
          </button>

          <!-- Image Display -->
          <img
            [src]="galleryItems[selectedIndex()].image"
            [alt]="galleryItems[selectedIndex()].title"
            class="w-full h-auto rounded-lg mb-4"
          />

          <!-- Title -->
          <h3
            class="text-2xl md:text-3xl font-playfair font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent text-center animate-pulse"
          >
            {{ galleryItems[selectedIndex()].title }}
          </h3>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class GalleryComponent {
galleryItems: GalleryItem[] = [
    { title: 'Smoke Pyrop Entry', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760789974/WhatsApp_Image_2025-10-18_at_2.38.15_PM_uofaui.jpg' },

  { title: 'Royal Wedding Ceremony', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760786159/%D0%9F%D0%B8%D1%80%D0%BE%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5-%D0%B2%D0%B5%D1%80%D1%82%D1%83%D1%88%D0%BA%D0%B8_uohg3z.jpg' },
    { title: 'Mirror Entry', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760778935/WhatsApp_Image_2025-10-18_at_2.45.17_PM_seicpt.jpg' },
  { title: 'Birthday Celebration', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760778202/birthday_u1vt4c.jpg' },
  { title: 'Baby Shower Party', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760787718/71IC2lqIgdL._AC_UF1000_1000_QL80__kjsukz.jpg' },
  { title: 'Griha Pravesh', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760788651/1757941457134_niilus.webp' },
  { title: 'Wedding Ring Ceremony', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760786310/ring-ceremony-1_rwf8da.jpg' },
  { title: 'Festival Celebration', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760788467/Cold-Pyro-Led-Gun-for-Wedding-2-768x768_fsu5tk.webp' },
  { title: 'Anniversary Party', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760788162/25th-wedding-anniversary_x98vbr.webp' },
   { title: 'Pyro & Fireworks Show', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760786782/WhatsApp_Image_2025-10-18_at_4.45.42_PM_pytolb.jpg' },
  { title: 'Bubble Effect', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760781003/2-10_quaxfn.jpg' },
   { title: 'Jaimala ceremony', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760789540/image_0901_vvdn2g.jpg' },
    { title: 'CO2 Paper Blaster', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760779026/WhatsApp_Image_2025-10-18_at_2.46.52_PM_wyjief.jpg' },
  { title: 'Snow Effect', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760779925/WhatsApp_Image_2025-10-18_at_3.01.49_PM_l7mijv.jpg' },
  { title: 'Low Fog', image: 'https://res.cloudinary.com/dzfxl5v4v/image/upload/v1760787291/Dry-Ice-4_yjja4l.jpg' }
];


  lightboxOpen = signal(false);
  selectedIndex = signal(0);

  openLightbox(index: number) {
    this.selectedIndex.set(index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    document.body.style.overflow = 'auto';
  }
}
