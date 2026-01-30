import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSlack, faGoogle, faJira } from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-integrations',
  imports: [FontAwesomeModule],
  templateUrl: './integrations.html',
  styleUrl: './integrations.css',
})
export class Integrations {
faSlack = faSlack;
  faGoogle = faGoogle;
  faJira = faJira;
  faZoom = faVideo;
}
