import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmpDetailsComponent} from '../emp-details/emp-details.component';
import {AddEmployeeComponent} from '../add-employee/add-employee.component';
import {DeleteEmpComponent} from '../delete-emp/delete-emp.component';
import { EditEmpComponent } from '../edit-emp/edit-emp.component';


let routes:Routes=[
  {
    path:'emproute',component:EmployeeListComponent
  },
  {
    path:'details/:id',component:EmpDetailsComponent
  },
  {
    path:'addEmployee',component:AddEmployeeComponent
  },

  {
    path:'delete/:id',component:DeleteEmpComponent
  },
  {
    path:'edit/:id',component:EditEmpComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }