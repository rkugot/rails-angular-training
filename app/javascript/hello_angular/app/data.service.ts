import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private userService: UserService) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('/login', { email: email, password: password }, httpOptions).pipe(
      tap(user => this.userService.updateUserId(user.userId)))
  }

  getCategories(): Observable<any> {
    return this.http.get<any>('/expenseCategories', httpOptions)
  }

  getExpenses(): Observable<any> {
    return this.http.get<any>('/users/${this.userService.userId}/expenses', httpOptions)
  }

  addExpense(formData): Observable<any> {
    return this.http.post<any>('/users/${this.userService.userId}/expense', formData, httpOptions)
  }
}
