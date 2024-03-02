import { Injectable } from '@angular/core';
import i18next from 'i18next';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  header: { [key: string]: string } = {
    skills: '',
    aboutMe: '',
    contact: '',
  };

  aboutMe: { [key: string]: string } = {
    p1: '',
    p2: '',
    p3: '',
  };
  skills: { [key: string]: string } = {
    p1: ''
  }

  imprint = '';
  fullName = '';
  constructor() {
    i18next.init({
      lng: 'de',
      resources: {
        en: {
          translation: {
            header: {
              aboutMe: 'About me',
              skills: 'Skills',
              contact: 'Contact',
            },
            aboutMe: {
              p1: `Hi, I am a Front-end developer based in Thüringen, Germany. I'm specialized in
                bringing ideas to life for designers and companies. Creativity and logical
                thinking are my strengths in connecting concepts to quality products. If you
                believe I'd be a good fit for your projects, feel free to get in touch!`,
              p2: `Since 2022, I've been enrolled in a part-time Bachelor's program in
                "Informatik", immersing myself in the diverse aspects of technology.
                Currently, I'm also undergoing an intensive Bootcamp program specializing in
                Frontend Development, aiming to further refine my practical skills and
                accelerate my growth. This dual educational journey has equipped me with a
                good theoretical foundation and strong practical insights into current
                industry practices.`,
              p3: `My nursing background since 2016 has enhanced my teamwork and adaptability
                skills. Working in healthcare emphasized collaboration, communication, and
                staying composed under pressure. These qualities, along with empathy and
                problem-solving abilities, are assets I bring to my role as a Frontend
                Developer, ensuring effective collaboration and client-focused project
                delivery.`,
            },
            skills: {
                p1: `I have gained experience in building projects with various front end
                technologies and concepts`
            }
          },
        },
        de: {
          translation: {
            header: {
              aboutMe: 'Über mich',
              skills: 'Skills',
              contact: 'Kontakt',
            },
            aboutMe: {
              p1: `Hallo, ich bin ein Frontend-Entwickler
              mit Sitz in Thüringen, Deutschland. Ich habe mich darauf spezialisiert,
              Ideen für Designer und Unternehmen zum Leben zu erwecken. Kreativität und
              logisches Denken sind meine Stärken, um Konzepte in hochwertige Produkte
              umzusetzen. Wenn Sie glauben, dass ich gut zu Ihren Projekten passen könnte,
              zögern Sie nicht, sich mit mir in Verbindung zu setzen!`,
              p2: `Seit 2022 bin ich eingeschrieben in einem Teilzeit-Bachelorstudium
              "Informatik", wo ich mich intensiv mit den vielfältigen Aspekten der
              Technologien beschäftige. Derzeit absolviere ich ebenfalls ein intensives
              Bootcamp-Programm mit Schwerpunkt auf der Frontend-Entwicklung, um meine
              praktischen Fähigkeiten weiter zu verfeinern und mein Wachstum in diesem
              Bereich zu beschleunigen. Diese duale Ausbildung hat mir eine solide
              theoretische Grundlage und fundierte praktische Einblicke in aktuelle
              Branchenpraktiken verschafft.`,
              p3: `Mein Hintergrund als Krankenpfleger hat meine Teamarbeit- und
              Anpassungsfähigkeiten verbessert. Die Arbeit im Gesundheitswesen betonte die
              Zusammenarbeit, Kommunikation und Ruhe in stressigen Situationen. Diese
              Eigenschaften, zusammen mit Empathie und Problemlösungsfähigkeiten, sind
              Werte, die ich in meine Rolle als Frontend-Entwickler einbringe und eine
              effektive Zusammenarbeit und kundenorientierte Projektabwicklung
              sicherstelle.`,
            },
            skills: {
                p1: `Ich habe Erfahrung im Aufbau von Projekten mit verschiedenen
                Frontend-Technologien und Konzepten gesammelt.`
            }
          },
        },
      },
    });
    this.setAreaLang(this.header, 'header');
    this.setAreaLang(this.aboutMe, 'aboutMe');
    this.setAreaLang(this.skills, 'skills');
  }

  setAreaLang(area: { [key: string]: string }, langArea: string) {
    for (let key in area) {
      area[key] = i18next.t(`${langArea}.${key}`);
    }
  }

  changeLang(language: string) {
    i18next.changeLanguage(language);
    this.imprint = i18next.t('imprint');
    this.fullName = i18next.t('fullName');
  }
}
