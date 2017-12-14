import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

// Classes and interfaces
import { Message } from '../message';

// Services
import { AuthService } from '../../providers/auth.service';

// UIkit
declare var UIkit: any;

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.less']
})
export class ChatDialogComponent implements OnInit, AfterViewChecked {
  messages: Observable<Message[]>;
  chatMessage = {
    content: ''
  };
  chatContainer: any;

  constructor(public _chat: ChatService, public _auth: AuthService, public router: Router) { }

  ngOnInit() {
    this.chatContainer = document.getElementById('chat-body');
    // appends to array after each new message is added to feedSource
    this.messages = this._chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
  }

  ngAfterViewChecked() {
    this.chatContainer.scrollBy(0, this.chatContainer.scrollHeight);
  }

  sendMessage(form: NgForm) {
    this._chat.converse(form.value.content);
    form.resetForm();
  }

  logout() {
    this._auth.logout();
    this.router.navigate(['login']);
  }
}
