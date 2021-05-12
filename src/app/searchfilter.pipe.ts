import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';


@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(users:User[]): unknown {
    return null;
  }

}
