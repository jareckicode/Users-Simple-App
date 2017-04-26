import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { UserService } from './user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})



export class AppComponent implements OnInit {
  title = 'app works!';
  users: User[]
  selectedUser: User;

  constructor(private userService: UserService) { }

  getUsers(): void {
      this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
      this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }





}
