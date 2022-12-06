import { Pipe, PipeTransform } from '@angular/core';
import { BudgetClient } from '../../home/interfaces/BudgetClient';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(array: BudgetClient[] | null, orderBy: string[]): BudgetClient[] | null {
    
    if (orderBy.length === 2) return array!.sort((a,b) => a[orderBy[0]][orderBy[1]] > b[orderBy[0]][orderBy[1]] ? 1 : -1)
    if (orderBy[0] === 'id') return array!.sort((a,b) => a[orderBy[0]] > b[orderBy[0]] ? 1 : -1)
    if (orderBy.length === 1) return array!.sort((a,b) => a[orderBy[0]] > b[orderBy[0]] ? -1 : 1)
    
    return array
  }
}
