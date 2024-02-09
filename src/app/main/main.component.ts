import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { PfsectionComponent } from '../pfsection/pfsection.component';
import { ContactformComponent } from '../contactform/contactform.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    WelcomeComponent,
    AboutmeComponent,
    PfsectionComponent,
    ContactformComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
