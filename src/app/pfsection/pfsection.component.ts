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
    '/assets/images/projectframes/Sharkie.png',
    '/assets/images/projectframes/Join.png',
    '/assets/images/projectframes/Pokédex.png',
    '/assets/images/projectframes/Pollo loco 4.png',
  ]
  portfolioGitLinks: string[] = [
    'https://github.com/OptimismusPr1m3/JumpNRun_Sparkie',
    'https://github.com/StephanieWetzel/Join',
    'https://github.com/OptimismusPr1m3/Pokedex',
    'https://github.com/OptimismusPr1m3/JumpNRun_Sparkie'
  ]
  portfolioLiveLinks: string[] = [
    'https://sebastian-wolff.developerakademie.net/JumpNRun_SParkie/index.html',
    'https://sebastian-wolff.developerakademie.net/Join/login_index.html',
    'https://sebastian-wolff.developerakademie.net/Pok%C3%A9dex/index.html'
  ]
  portfolioTitles: string []= [
    'Sharkie',
    'Join',
    'Pokedéx',
    'Placeholder'
  ]
  portfolioInfos: string[] = [
    'Placeholder',
    'Placeholder',
    'Placeholder',
    'Placeholder',
  ]
  portfolioTech: string[] = [
    'Javascript | HTML | CSS',
    'Javascript | HTML | CSS',
    'Javascript | HTML | CSS',
    'TypeScript | HTML | Firebase | CSS',
  ]


}
