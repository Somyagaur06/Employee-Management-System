import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {RoutingModule} from './routing/routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule }    from '@angular/common/http';
import { EmpService } from './emp.service';
import { DataService } from './data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmpFilterPipe } from './emp-filter.pipe';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmpComponent } from './delete-emp/delete-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';


@NgModule({
  imports:[ BrowserModule, FormsModule,RoutingModule,HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(DataService)
    ],
  declarations: [ AppComponent, HelloComponent, EmployeeListComponent, EmpFilterPipe, EmpDetailsComponent, AddEmployeeComponent, DeleteEmpComponent, EditEmpComponent ],
  bootstrap: [ AppComponent ],
  providers: [EmpService, DataService],
  
})
export class AppModule { }
