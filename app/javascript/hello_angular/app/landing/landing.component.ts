import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: require('./landing.component.html'),
  styles: [require('./landing.component.css').toString()]
})
export class LandingComponent implements OnInit {
  emailValidity = true;
  passwordValidity = true;
  constructor() { }

  ngOnInit() {
  }

  scroll(el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  validateEmailForm(emailInput) {
    if (emailInput.validity.valid) {
      this.emailValidity = true;
      return true;
    } else {
      this.emailValidity = false;
      return false;
    }
  }

  validatePasswordForm(passwordInput) {
    if (passwordInput.validity.valid) {
      this.passwordValidity = true;
      return true;
    } else {
      this.passwordValidity = false;
      return false;
    }
  }

  signUp(event, emailInput, passwordInput) {

  }
}
