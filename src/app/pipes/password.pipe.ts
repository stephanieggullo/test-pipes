import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, active: boolean= true): string {
    let res: string= '';
    if (active) {
      for(let letter of value){
        res+= '*';
      }
      return res;
    }else{
      return value;
    }
  }
}
