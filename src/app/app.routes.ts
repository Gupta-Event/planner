import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero';
import { AboutComponent } from './components/about';
import { ContactComponent } from './components/contact';
import { ServicesComponent } from './components/services';
import { GalleryComponent } from './components/gallery';

export const routes: Routes = [
  { path: '', component: HeroComponent },            // default/home page
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '**', redirectTo: '' }                    // fallback for unknown routes
];
