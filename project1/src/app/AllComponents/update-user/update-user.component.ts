import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user_id: number = 0;
  user_name: string = '';
  user_email: string = '';
  successMessage: string = ''; 
  errorMessage: string = '';  
  async fetchUserData(id: number) {
    try {
      const response = await axios.get(`http://localhost:8080/user/update/${id}`);
      const userData = response.data;
      this.user_id = userData.user_id;
      this.user_name = userData.user_name;
      this.user_email = userData.user_email;
    } catch (error) {
      console.error('Error fetching user data:', error);
      this.errorMessage = 'Failed to fetch user data. Please check the user ID.';
    }
  }
  submitForm() {
    const updatedUserData = {
      user_name: this.user_name,  
      user_email: this.user_email
    };
    axios.put(`http://localhost:8080/user/update/${this.user_id}`, updatedUserData)
      .then(response => {
        console.log('User updated:', response.data);
        this.successMessage = 'User successfully updated!';
        this.clearForm();
      })
      .catch(error => {
        console.error('There was an error!', error);
        this.successMessage = ''; 
        this.errorMessage = 'Failed to update user.'; 
      });
  }

  ngOnInit(): void {}

  onUserIdChange() {
    if (this.user_id) {
      this.fetchUserData(this.user_id);
    }
  }

  clearForm() {
    this.user_id = 0;
    this.user_name = '';
    this.user_email = '';
  }
}
