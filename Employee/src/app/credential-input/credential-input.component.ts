import { Component } from '@angular/core';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credential-input',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './credential-input.component.html',
  styleUrl: './credential-input.component.css'
})
export class CredentialInputComponent {
  user_name: string = '';
  user_password: string = '';
  user_role: string = '';
  user_department: string = '';
  message: String = '';
  successMessage: string = ''; 

  submitForm() {
    const userData = {
      username: this.user_name,
      password: this.user_password,
      role: this.user_role,
      department: this.user_department,
    };

    axios.post('http://localhost:8080/employees/employee/add', userData)
      .then(response => {
        console.log('User added:', response.data);
        this.successMessage = 'Employee successfully added!';
        this.message=response.data.message;
        this.clearForm(); 
      })
      .catch(error => {
        console.error('There was an error!', error);
        this.successMessage = ''; 
      });
  }

  clearForm() {
    this.user_name = '';
    this.user_password = '';
    this.user_role =  '';
    this.user_department = '';
  }
}
