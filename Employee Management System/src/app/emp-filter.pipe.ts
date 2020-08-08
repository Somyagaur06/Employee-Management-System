import { Pipe, PipeTransform } from '@angular/core';
import {Employees} from './employess';

@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {

  transform(value1: Employees[], value2:String): Employees[] {
    if(!value1) return [];
    if(!value2) return value1;
    return value1.filter((a)=>{
   return a.name.toLowerCase().startsWith(value2.toLowerCase());
  });

  }}