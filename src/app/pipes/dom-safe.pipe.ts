import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSafe'
})
export class DomSafePipe implements PipeTransform {
  constructor( private domSanitizer: DomSanitizer) { }
  transform(value: string, url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }

}
