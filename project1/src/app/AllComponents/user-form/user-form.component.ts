import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user_id: number = 0;
  user_name: string = '';
  user_email: string = '';
  successMessage: string = ''; 

  submitForm() {
    const userData = {
      user_id: this.user_id,
      user_name: this.user_name,
      user_email: this.user_email
    };

    axios.post('http://localhost:8080/user/add', userData)
      .then(response => {
        console.log('User added:', response.data);
        this.successMessage = 'User successfully added!';
        this.clearForm(); 
      })
      .catch(error => {
        console.error('There was an error!', error);
        this.successMessage = ''; 
      });
  }

  clearForm() {
    this.user_id = 0;
    this.user_name = '';
    this.user_email = '';
  }
}
