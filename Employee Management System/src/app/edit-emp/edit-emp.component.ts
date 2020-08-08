import { Component, OnInit } from '@angular/core';
import {Employees} from '../employees';
import {EmpService} from '../emp.service';
import {ActivatedRoute,Routes} from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  emp:Employees;

  constructor(
    private http:EmpService,
    private route:ActivatedRoute
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData(){
 const id=this.route.snapshot.paramMap.get('id');
  this.http.getDetails(+id).subscribe(emp=>this.emp=emp)
  };

Update(){
  this.http.Update(this.emp).subscribe();
}


}