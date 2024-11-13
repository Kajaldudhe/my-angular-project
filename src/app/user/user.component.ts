import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  userForm: User = new User(0, '', '');  // Initialize the form data model
  editMode: boolean = false;
  editUserIndex: number | null = null;

  constructor() { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Create or Update User
  onSubmit() {
    if (this.editMode) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  // Create User
  createUser() {
    const newUser = new User(
      this.users.length + 1, // simple ID generation for demo purposes
      this.userForm.name,
      this.userForm.email
    );
    this.users.push(newUser);
    this.resetForm();
  }

  // Update User
  updateUser() {
    if (this.editUserIndex !== null) {
      const userToUpdate = this.users[this.editUserIndex];
      userToUpdate.name = this.userForm.name;
      userToUpdate.email = this.userForm.email;
      this.resetForm();
    }
  }

  // Edit User (Load user data into the form)
  onEdit(index: number) {
    this.editMode = true;
    this.editUserIndex = index;
    this.userForm = { ...this.users[index] }; // load user data into form
  }

  // Delete User
  onDelete(index: number) {
    this.users.splice(index, 1);
  }

  // Reset Form
  resetForm() {
    this.userForm = new User(0, '', '');
    this.editMode = false;
    this.editUserIndex = null;
  }

  // Load some initial users (for demo purposes)
  loadUsers() {
    this.users = [
      new User(1, 'John Doe', 'john@example.com'),
      new User(2, 'Jane Smith', 'jane@example.com')
    ];
  }
}
