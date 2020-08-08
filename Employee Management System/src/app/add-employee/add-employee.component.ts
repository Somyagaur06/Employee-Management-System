import { Component, OnInit } from '@angular/core';
import {Employees} from '../employees';
import {EmpService} from '../emp.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
 name:string;
 location:string;
 email:string;
 mobile:number;
 emp:Employees;
 employees:Employees[];

 
 
  constructor(
    private http:EmpService
  ) { }

  ngOnInit() {}




  addData(name,location,email,mobile){
  
    this.http.addEmp({name,location,email,mobile}as Employees).subscribe(empl =>{
      this.employees.push(empl);
    });


    
   


    

  }

}