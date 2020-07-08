import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService, User } from '../users.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  public userId: number;
  public user: User;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // Conversion de valor que recibe de string a number
      this.userId = parseInt(params.get('userId'), 10);
      this.user = this.userService.getDetailUser(this.userId);
    });
  }

}
