import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {
    transform(value: string, all: boolean = true): string {
        return 'hello world';
    }
}