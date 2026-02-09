import { Component, inject, OnInit } from '@angular/core';
import { HomeService } from './home-service';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  data:string = "Welcome to the Home Page!";

  newStudent:any = {};
  editStudent:any = {};

  homeService = inject(HomeService);
  apiData = this.homeService.apiData

  students:any = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },
    { id: 3, name: 'Charlie', age: 23 }
  ];


  ngOnInit() {
    this.getApiData();
  }

  getApiData() {
    this.homeService.getApiData();
  }

  addStudent(){
    const newId = this.students.length > 0 ? this.students.length + 1 : 1

    this.students.push({id: newId, ...this.newStudent});
  }

  editStudentDetails(data:any){
    this.editStudent = {...data};
  }

  saveStudentDetails(){
    const student = this.students.find((s:any) => s.id === this.editStudent.id);

    if(student){
      student.name = this.editStudent.name;
      student.age = this.editStudent.age;
    }
  }
}
