import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { NgForm } from '@angular/forms';
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
  chatMessage = {
    content: ''
  };

  constructor(public _chat: ChatService) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this._chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
  }

  sendMessage(form: NgForm) {
    this._chat.converse(form.value.content);
    form.resetForm();
  }

  logForm(form: NgForm) {
    console.log(form);
  }
}
