import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Studentservice {

  students = [
    { name: 'om', age: 22, course: 'cse' },
    { name: 'shivtej', age: 20, course: 'it' }
  ];

  getStudents() {
    return this.students;
  }
}