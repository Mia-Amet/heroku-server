import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  brand = 'SomeBrand';
  userEmail: string;
  userDropdown = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.user.subscribe(user => {
      this.userEmail = user ? user.email : null;
    });
  }

  navigateAccount() {
    this.router.navigate(['/about']);
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/login']);
    this.userDropdown = false;
  }

}
