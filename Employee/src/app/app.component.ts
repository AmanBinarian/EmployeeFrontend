import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule if not already imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],  // Import CommonModule for ngIf, ngFor, etc., and RouterOutlet for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Use styleUrls (plural)
})
export class AppComponent {
  title = 'Employee';
}
