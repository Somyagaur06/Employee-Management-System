import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {EmpService} from '../emp.service';
@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  constructor( 
    private route:ActivatedRoute,
    private emp:EmpService,
    private router:Router
  )
  {}
  

  ngOnInit() {
    this.deleteEmp()
  }

deleteEmp(){
  const id=this.route.snapshot.paramMap.get('id');
  this.emp.deleteEmp(+id).subscribe();
  this.router.navigate(['./emproute']);


}
}