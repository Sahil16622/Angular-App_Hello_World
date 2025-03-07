import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],  // ✅ Merged imports properly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // ✅ Fixed `styleUrl` -> `styleUrls`
})
export class AppComponent {
  title = 'HelloWorld';
  message: string = 'Hello from BridgeLabz using One Way Data Bindings';
  logoUrl: string = 'BL_logo_square_jpg.jpg';
  userName: string = '';
  errorMessage: string = '';

  openBridgeLabzSite() {
    window.open('https://www.bridgelabz.com', '_blank');
  }

  validateUserName() {
    const namePattern = /^[A-Z]{1}[a-zA-Z]{2,}$/; // Starts with uppercase, min 3 letters
    if (!namePattern.test(this.userName)) {
      this.errorMessage =
        'Invalid name! Start with a capital letter and use at least 3 characters.';
    } else {
      this.errorMessage = '';
    }
  }
}
