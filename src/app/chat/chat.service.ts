import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// Environment vars
import { environment } from '../../environments/environment';

// Classess and interfaces
import { Message } from './message';

// DialogFlow Client
import { ApiAiClient } from 'api-ai-javascript';

@Injectable()
export class ChatService {
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

  // Sends and receives messages via Dialogflow
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg);
  }
}
