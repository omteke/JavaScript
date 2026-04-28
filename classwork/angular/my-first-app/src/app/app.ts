import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from '../admin/admin';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Admin,StudentList
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-first-app');

  name : string = 'Angular';
  age : number = 10;
  data : any = null;
  isloading : boolean = false;
}
