import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from '../aboutme/aboutme.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,HeaderComponent, WelcomeComponent, AboutmeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
