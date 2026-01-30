import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  imports: [FontAwesomeModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
faHeadset = faHeadset;
 
}
