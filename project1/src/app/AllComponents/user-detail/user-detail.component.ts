import { Component } from '@angular/core';
import axios from 'axios'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  userId: number = 0;  
  userDetails: any = null; 
  errorMessage: string = ''; 

  constructor() {}

  onUserIdChange(value: any) { 
    this.userId =  Number(value);
    console.log('User ID after change:', this.userId);
  }

  async fetchUserDetails() { 

    if (this.userId === null || this.userId <= 0) {
      this.errorMessage = 'Please enter a valid user ID';
      return;
    }


    console.log('Fetching user details for ID:', this.userId); 
    
    const apiUrl = `http://localhost:8080/user/fetch?user_id=${this.userId}`;
    
    try {
      const response = await axios.get(apiUrl);
      console.log('Response data:', response.data); 
      this.userDetails = response.data;  
      this.errorMessage = '';  
    } catch (error) {
      console.error(error); 
      this.errorMessage = 'Error fetching user details. Please try again later.';
      this.userDetails = null; 
    }
  }
}
