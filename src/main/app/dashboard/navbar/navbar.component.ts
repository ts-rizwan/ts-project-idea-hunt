import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userEmail: string = '';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userEmail = this.authService.currentUserEmail();
  }
}
