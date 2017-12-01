import { Injectable } from '@angular/core';

// Environment vars
import { environment } from '../../environments/environment';

// DialogFlow Client
import { ApiAiClient } from 'api-ai-javascript';

@Injectable()
export class ChatService {
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  constructor() { }

  talk() {
    this.client.textRequest('¿Quién eres tú?')
      .then(res => console.log(res));
  }
}
