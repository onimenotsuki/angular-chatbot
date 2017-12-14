import { Pipe, PipeTransform } from '@angular/core';
import { SafeUrl, SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private dom: DomSanitizer) { }

  transform(url: string, t?: string): SafeUrl | SafeResourceUrl {
    switch (t) {
    case 'html':
      return this.dom.bypassSecurityTrustHtml(url);
    case 'style':
      return this.dom.bypassSecurityTrustStyle(url);
    case 'script':
      return this.dom.bypassSecurityTrustScript(url);
    case 'url':
      return this.dom.bypassSecurityTrustUrl(url);
    case 'resourceUrl':
      return this.dom.bypassSecurityTrustResourceUrl(url);
    default:
      throw new Error(`Unable to bypass security for invalid type: ${t}`);
    }
  }
}
