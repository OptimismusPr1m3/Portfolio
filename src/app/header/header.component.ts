import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  aboutMe: boolean = false;
  skills: boolean = false;
  portfolio: boolean = false;

  constructor() {}
  toggleActiveLink(aCategoryName: string) {
    this.aboutMe = aCategoryName === 'aboutMe';
    this.skills = aCategoryName === 'skills';
    this.portfolio = aCategoryName === 'portfolio';
  }
}
