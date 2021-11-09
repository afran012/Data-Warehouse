import { Component, OnInit } from '@angular/core';
import { User } from '../../../interfaces/user';

///// TAABLA

const listUsers: User[] = [
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
  {user: 'dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'}
];

///////////////////////////

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['user', 'name', 'lastname', 'sex', 'actions'];
  dataSource = listUsers;

  constructor() { }

  ngOnInit(): void {
  }

}
