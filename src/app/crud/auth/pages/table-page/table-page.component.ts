import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/crud/interfaces/users.interface';
import { UsersService } from 'src/app/crud/services/users.service';

@Component({
  selector: 'table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css'],
})
export class TablePageComponent implements OnInit {
  public users: Users[] = [];
  public selectedUserId: string | null = null;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  editUser() {}

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteUserById(id?: string) {
    if (!id) return;
   this.onDelete.emit(id)

  }
}
