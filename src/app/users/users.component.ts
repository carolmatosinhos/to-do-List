import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: Array<any> = new Array();

  ngOnInit(): void {
    this.listUsers()
  }

  listUsers() {

  }
}
