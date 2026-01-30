import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ContactHero } from './contact-hero/contact-hero';
import { Features } from './features/features';
import { Footer } from './footer/footer';
import { Integrations } from './integrations/integrations';
import { Testimonial } from './testimonial/testimonial';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Navbar,
    ContactHero,
    Features,
    Integrations,
    Testimonial,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('credPal-frontend');
}
