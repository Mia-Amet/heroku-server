import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  onDelete(id: number) {
    this.users$ = this.userService.deleteUser(id);
  }

  onEdit(id: number) {
    this.router.navigate(['/user', id]);
  }
}
