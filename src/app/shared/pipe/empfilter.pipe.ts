import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empfilter',
  standalone: true
})
export class EmpfilterPipe implements PipeTransform {

  transform(employees: any[], filter: string | null): any {
    if(!employees || !filter) {
      return employees
    }
    return employees.filter( (emp) => {
      return emp.city.includes(filter)
    } );
  }

}
