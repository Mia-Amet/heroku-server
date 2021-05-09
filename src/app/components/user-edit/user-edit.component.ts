import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userId: string;
  user: User;
  isReadOnly = true;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userService.getUser(this.userId).subscribe((user: User) => {
      this.user = user;
    });
  }

  onSave() {
    this.userService.updateUser({ ...this.user }).subscribe((user: User) => {
      this.user = user;
      this.router.navigate(['/']);
    }, err => {
      console.log(err);
    });
  }
}
