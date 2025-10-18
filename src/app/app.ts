import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header';
import { HeroComponent } from './components/hero';
import { AboutComponent } from './components/about';
import { ServicesComponent } from './components/services';
import { GalleryComponent } from './components/gallery';
import { ContactComponent } from './components/contact';
import { FooterComponent } from './components/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // ⚡ corrected here
})
export class App {}
