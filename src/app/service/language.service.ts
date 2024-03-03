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
    p1: '',
  };
  portfolio: { [key: string]: string } = {
    samplePhrase1: '',
    samplePhrase2: '',
  };
  contactSection: { [key: string]: string } = {
    cHead: '',
    problemHead: '',
    fillerP11: '',
    fillerP12: '',
    fillerP13: '',
    fillerP21: '',
    fillerP22: '',
    warn1: '',
    warn2: '',
    warn3: '',
    pPolicy1: '',
    pPolicy2: '',
    pPolicy3: '',
    placeHolder1: '',
    placeHolder2: '',
    placeHolder3: '',
  };

  selectedLanguage = i18next;

  imprint = '';
  fullName = '';
  constructor() {
    i18next.init({
      lng: 'en',
      debug: true,
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
                technologies and concepts`,
            },
            portfolio: {
              samplePhrase1: `This page is a sample of my work! Scroll down to view other`,
              samplePhrase2: `projects I have developed.`,
            },
            contactSection: {
              cHead: 'Contact',
              problemHead: 'Got a problem to solve?',
              fillerP11:
                'Contact me through this form, I am interested in hearing',
              fillerP12:
                'you, knowing your ideas and contributing to your projects',
              fillerP13: 'with my work',
              fillerP21: 'Need a Frontend developer?',
              fillerP22: 'Contact me!',
              warn1: 'Your name is required',
              warn2: 'Your email is required',
              warn3: 'Please enter a message',
              pPolicy1: `I've read the`,
              pPolicy2: 'privacy policy',
              pPolicy3: 'and agree to the processing of my data as outlined',
              placeHolder1: 'Your Name',
              placeHolder2: 'Your email',
              placeHolder3: 'Your message',
            },
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
              Frontend-Technologien und Konzepten gesammelt.`,
            },
            portfolio: {
              samplePhrase1: `Dieser Bereich ist ein Beispiel meiner Arbeit!`,
              samplePhrase2: `Scrolle nach unten, um weitere Projekte anzusehen, die ich entwickelt habe.`,
            },
            contactSection: {
              cHead: 'Kontakt',
              problemHead: 'Haben Sie ein Problem zu lösen?',
              fillerP11:
                'ontaktieren Sie mich über dieses Formular. Ich bin daran interessiert,',
              fillerP12:
                'von Ihnen zu hören, Ihre Ideen kennenzulernen und durch',
              fillerP13: 'meine Arbeit zu Ihren Projekten beizutragen.',
              fillerP21: 'Brauchen Sie einen Frontend-Entwickler?',
              fillerP22: 'Kontaktieren Sie mich!',
              warn1: 'Ihr Name ist erforderlich!',
              warn2: 'Ihre Email ist erforderlich!',
              warn3: 'Bitte geben Sie eine Nachricht ein!',
              pPolicy1: `Ich habe die`,
              pPolicy2: 'Datenschutzrichtlinie',
              pPolicy3: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
              placeHolder1: 'Ihr Name',
              placeHolder2: 'Ihre Email',
              placeHolder3: 'Ihre Nachricht',
            },
          },
        },
      },
    });
    this.setAreaLang(this.header, 'header');
    this.setAreaLang(this.aboutMe, 'aboutMe');
    this.setAreaLang(this.skills, 'skills');
    this.setAreaLang(this.portfolio, 'portfolio');
    this.setAreaLang(this.contactSection, 'contactSection');
  }

  setAreaLang(area: { [key: string]: string }, langArea: string) {
    for (let key in area) {
      area[key] = i18next.t(`${langArea}.${key}`);
    }
  }

  changeLang(language: string) {
    i18next.changeLanguage(language);
    this.setAreaLang(this.header, 'header');
    this.setAreaLang(this.aboutMe, 'aboutMe');
    this.setAreaLang(this.skills, 'skills');
    this.setAreaLang(this.portfolio, 'portfolio');
    this.setAreaLang(this.contactSection, 'contactSection');
  }
}
