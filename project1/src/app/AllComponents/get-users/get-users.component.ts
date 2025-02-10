import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-get-users',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css'],
})
export class GetUsersComponent implements OnInit {
  users: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.fetchUsers();}
  fetchUsers(): void {
    const apiUrl = 'http://localhost:8080/user/fetch/all';
    (async () => {
      try {
        const response = await axios.get(apiUrl);
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    })();
  }
}
