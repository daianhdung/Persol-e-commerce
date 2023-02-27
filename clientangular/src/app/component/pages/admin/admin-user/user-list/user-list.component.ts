import { Component } from '@angular/core';
import { UserService } from 'app/services/userService/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList: any[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(){

    this.userService.getAllUser().subscribe({
      next: response => {
        this.userList = response.data
      },
      error: error => console.log(error)
    })
  }
}
