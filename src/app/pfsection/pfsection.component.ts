import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pfsection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pfsection.component.html',
  styleUrl: './pfsection.component.scss'
})
export class PfsectionComponent {

  portfolioImages: string[] = [
    '/assets/images/projectframes/Pollo loco 1.png',
    '/assets/images/projectframes/Pollo loco 2.png',
    '/assets/images/projectframes/Pollo loco 3.png',
    '/assets/images/projectframes/Pollo loco 4.png',
  ]

}
