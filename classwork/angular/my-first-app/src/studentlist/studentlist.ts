import { Component } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  imports: [],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {
  students : any[] = [];//it means it can store any type of data

  constructor(private studentsevice:studentsevice) {}

  ngOnINit(){
    this.students = this.studentservice.getstudents();
    console.log(this.students);
  }
}

