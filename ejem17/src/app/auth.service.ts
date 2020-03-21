import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(public router: Router) { }

  public login(): void {
  }

  public handleAuthentication(): void {
    this.router.navigate(['/dashboard']);
  }

  public logout(): void {
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    return true;
  }
}
