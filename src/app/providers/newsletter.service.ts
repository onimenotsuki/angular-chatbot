import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Import env vars
import { environment } from '../../environments/environment';

@Injectable()
export class NewsletterService {
  private apiUrl: string = environment.apiUrl + '/subscription';
  private listId: string = environment.mailchimp.listId;
  private apiKey: string = environment.mailchimp.apiKey;
  private user: string = environment.mailchimp.user;
  private inst: string = environment.mailchimp.instance;

  constructor(public http: HttpClient) { }

  addSubscriptor(subscriptor: { email: string }) {
    const body = JSON.stringify(subscriptor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post(`${ this.apiUrl }?instance=${ this.inst}&listId=${ this.listId }&user=${ this.user }&apiKey=${ this.apiKey }`, body, { headers });
  }
}
