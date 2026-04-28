import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  fname: string = 'Admin';
  age: number = 30;
  email: string = 'admin@example.com';

  changeName() {
    this.fname = 'Updated Admin';
  }
}
