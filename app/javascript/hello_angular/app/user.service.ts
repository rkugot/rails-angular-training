import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId = null;

  constructor() { }

  updateUserId(userId) {
    this.userId = userId;
  }

  clearUserId() {
    this.userId = null;
  }
}
