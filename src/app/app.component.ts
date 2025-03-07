import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'HelloWorld';
  message: string = 'Hello from BridgeLabz using One Way Data Bindings';
  logoUrl: string = 'BL_logo_square_jpg.jpg';
  openBridgeLabzSite(){
    window.open('https://www.bridgelabz.com', '_blank');
  }
  userName: string = '';
}