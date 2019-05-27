import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { DataService } from '../data.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};
@Component({
  selector: 'app-landing',
  template: require('./landing.component.html'),
  styles: [require('./landing.component.css').toString()]
})
export class LandingComponent implements OnInit {
  emailValidity = true;
  passwordValidity = true;
  name: '';

  constructor(private http: HttpClient,
              private router: Router,
              private dataService: DataService) { }

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
    if (this.validateEmailForm(emailInput) && this.validatePasswordForm(passwordInput)) {
      this.dataService.login(emailInput.value, passwordInput.value)
        .subscribe(_ => this.router.navigate(['app']));
    } else {
      event.preventDefault();
    }
  }

  changeName() {
    this.http.post<any>('/login', { sdfsdf: 'sdfsdg', sdfsdg: 'password' }, httpOptions).subscribe(data => console.log(data['name']));
  }

  navigate() {
    this.http.get('/home/show').subscribe(data => console.log(data['name']));
  }
}
