import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/crud/interfaces/users.interface';
import { UsersService } from 'src/app/crud/services/users.service';

@Component({
  selector: 'table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css'],
})
export class TablePageComponent implements OnInit {
  public users: Users[] = [];
  public selectedUser: Users | null = null;

  constructor(
    private usersService: UsersService,
  ) {}
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));

    this.usersService.getAddedUser().subscribe((addedUser) => {
      this.users.push(addedUser);
    });

    this.usersService.getUpdatedUser().subscribe((updatedUser) => {
      const index = this.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    });
  }

  editUser(user: Users) {
    this.selectedUser = { ...user };
    this.usersService.setUpdatedUser(user)
  }

  deleteUser(id: number) {
    this.usersService.deleteUserById(id).subscribe((result) => {
      if (result) {
        this.users = this.users.filter((user) => user.id !== id);
      }
    });
  }
}
