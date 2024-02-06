import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  isInvalidName: boolean = false;
  isInvalidMail: boolean = false;
  isInvalidMessage: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    pPolicy: false
  };
  

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    } else if (!ngForm.valid && ngForm.submitted) {
      this.checkNameValidation();
      this.checkEmailValidation();
      this.checkMessageValidation();
    }
  }
  checkMessageValidation() {
    if (this.contactData.message == '') {
      this.isInvalidMessage = true;
    }
  }

  checkNameValidation() {
    if (this.contactData.name == '') {
      this.isInvalidName = true;
    }
  }

  checkEmailValidation() {
    if (this.contactData.email == '') {
      this.isInvalidMail = true;
    }
  }
}
