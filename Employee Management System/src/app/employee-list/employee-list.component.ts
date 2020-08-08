import { Component, OnInit } from '@angular/core';
import {Employees} from '../employees';
import { EmpService } from '../emp.service';
import {empFilterPipe} from '../emp-filter';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  count:number=0;
  search:String='';
  employee:Employees[];

  constructor(private emp:EmpService) { }

  ngOnInit(){
    this.getAll();
  }
  getAll():void{
    this.emp.getAll().subscribe(data =>this.employee=data);
}

  
 


}