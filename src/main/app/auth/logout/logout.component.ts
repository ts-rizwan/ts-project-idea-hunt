import { Component } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';
import { NavbarComponent } from '@app/dashboard/navbar/navbar.component';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(private auth: AuthService) {}

  logOut() {
    this.auth.logOut();
  }
}
