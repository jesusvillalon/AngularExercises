import { Component, OnInit} from '@angular/core';
import { Users } from 'src/app/crud/interfaces/users.interface';
import { UsersService } from 'src/app/crud/services/users.service';

@Component({
  selector: 'table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css'],
})
export class TablePageComponent implements OnInit{
  public users: Users[] = [];

  constructor(private usersService: UsersService) {

  }
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));


    this.usersService.getAddedUser().subscribe((addedUser) => {
      this.users.push(addedUser);
    });
  }


  editUser(){

  }

  deleteUser(){

  }
}
