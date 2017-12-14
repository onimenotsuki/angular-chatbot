import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  social: any = {};

  constructor() {
    this.social = [
      { name: 'facebook', url: 'https://www.facebook.com/alephzero.ed' },
      { name: 'linkedin', url: 'https://www.linkedin.com/company/22302034' },
      { name: 'twitter', url: 'https://twitter.com/alephzero_mx' }
    ];
  }
}
