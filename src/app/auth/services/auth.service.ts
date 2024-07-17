import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedSub: BehaviorSubject<boolean>;
  isLoggedIn = false;

  constructor() {
    this.isLoggedSub = new BehaviorSubject<boolean>(this.isUserLog);
  }
  get isUserLog(): boolean {
    const data = localStorage.getItem('user');
    if (data) {
      return true;
    }
    return false;
  }
}
