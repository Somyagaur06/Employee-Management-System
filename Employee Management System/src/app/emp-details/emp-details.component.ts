import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {EmpService} from '../emp.service';
import {Employees} from './employees';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
emp:Employees[];
  constructor(private route:ActivatedRoute,
              private http:EmpService,
              private router:Router) { 

  }

  ngOnInit() {
    this.getDetails();
     
  }

  getDetails():void{
    const id= +this.route.snapshot.paramMap.get('id');
    this.http.getDetails(id).subscribe(data=>this.emp=data)
    
  }
  back():void{
    this.router.navigate(['./emproute']);
    
  }
}