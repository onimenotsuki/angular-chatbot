import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

// Classes and interfaces
import { Message } from '../message';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.less']
})
export class ChatDialogComponent implements OnInit {
  messages: Observable<Message[]>;
  formValue: string;

  constructor(public _chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this._chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
  }

  sendMessage() {
    this._chat.converse(this.formValue);
    this.formValue = '';
  }
}
