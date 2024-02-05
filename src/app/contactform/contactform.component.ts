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
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  isInvalidMail: boolean = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    } else if (!ngForm.valid && ngForm.submitted) {
      this.checkNameValidation();
      this.checkEmailValidation();
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
