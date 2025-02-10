import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-home-component',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {
  users: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.fetchUsers();}
  fetchUsers(): void {
    const apiUrl = 'http://localhost:8080/employees/getallemployee';
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
