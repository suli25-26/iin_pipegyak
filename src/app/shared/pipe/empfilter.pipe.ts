import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empfilter',
  standalone: true
})
export class EmpfilterPipe implements PipeTransform {

  transform(employees: any[], filter: {name: string | null; city: string | null} ): any {
    if(!employees || (!filter.name && !filter.city)) {
      return employees
    }
    return employees.filter( (emp) => {
      return (emp.name.includes(filter.name) && emp.city.includes(filter.city))
    } );
  }

}
