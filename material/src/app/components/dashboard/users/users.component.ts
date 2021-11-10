import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../interfaces/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listUsers: User[] = [
    {user: '1dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '2dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '3dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '4dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '5dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '6dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '7dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '8dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'},
    {user: '9dsfasdf', name: 'Hydrogen', lastname: 'sdfasd', sex: 'Hasdfasdf'}
  ];

  displayedColumns: string[] = ['user', 'name', 'lastname', 'sex', 'actions'];
  dataSource = new MatTableDataSource(this.listUsers);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
