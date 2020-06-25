import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../users.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: User[] = [];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((userList) => {
      this.userList = userList;
    });
    }
}

