import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

// Import env vars
import { environment } from '../../environments/environment';

// Using UIkit
declare var UIkit: any;

@Injectable()
export class NewsletterService {
  private apiUrl: string = environment.apiUrl + '/subscription';
  private listId: string = environment.mailchimp.listId;
  private apiKey: string = environment.mailchimp.apiKey;
  private user: string = environment.mailchimp.user;
  private inst: string = environment.mailchimp.instance;
  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(public http: HttpClient) { }

  addSubscriptor(subscriptor: { email: string }) {
    const body = JSON.stringify(subscriptor);

    return this.http
      .post(`${ this.apiUrl }?instance=${ this.inst}&listId=${ this.listId }&user=${ this.user }&apiKey=${ this.apiKey }`, body,
            { headers: this.headers });
  }

  getSubscriptors() {
    return this.http
      .get(`${ this.apiUrl }/members?instance=${ this.inst }&listId=${ this.listId }&apiKey=${ this.apiKey }`,
           { headers: this.headers })
    // Only map email of the members object result
      .map(members => {
        let emailMembers: any[] = [];

        for (let i in members) {
          emailMembers.push(members[i]['email_address']);
        }

        return emailMembers;
      });
  }

  showNotification(): void {
    UIkit.notification({
      message: '¡Gracias por suscribirte a nuestro boletín! Ahora podrás recibir todas nuestras promociones.',
      status: 'success',
      pos: 'top-center',
      timeout: 3000
    });
  }

  showModal(element: string) {
    UIkit.modal(element).show();
  }

  hideModal(element: string) {
    UIkit.modal(element).hide();
  }
}
