import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  viewProviders: [ UsersService ],
})
export class UsersComponent implements OnInit {

  users: Object[];

  constructor(private _router: Router, private _usersService: UsersService) {}

  goBack(route: string): void {
    this._router.navigate(['/']);
  }

  userClick(id: string): void {
    alert('clicked on user: ' + id);
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this._usersService.query().subscribe((users: Object[]) => {
      this.users = users;
    });
  }
}
