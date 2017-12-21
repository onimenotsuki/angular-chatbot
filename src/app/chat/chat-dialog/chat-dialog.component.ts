import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/count';

// Classes and interfaces
import { Message } from '../message';

// Services
import { AuthService } from '../../providers/auth.service';
import { NewsletterService } from '../../providers/newsletter.service';

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
  chatContainer: any;
  newsletter: boolean = false;

  constructor(public _chat: ChatService, public _auth: AuthService,
              public router: Router, public _newsletter: NewsletterService) { }

  ngOnInit() {
    this.chatContainer = document.getElementById('chat-body');
    // appends to array after each new message is added to feedSource
    this.messages = this._chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));

    setTimeout(() => {
      if (!localStorage.getItem('popup:newsletter')) {
        let date = new Date();
        localStorage.setItem('popup:newsletter', date.toString());
        this._newsletter.showModal('#newsletter-modal');
      }
    }, 15000);
  }

  sendMessage(form: NgForm): void {
    this._chat.converse(form.value.content)
      .then(res => {
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech, 'bot');
        this._chat.update(botMessage);

        setTimeout(() => {
          this.chatContainer.scrollBy(0, this.chatContainer.scrollHeight + 50);
        }, 50);
      });;

    form.resetForm();
  }

  logout(): void {
    this._auth.logout();
    this.router.navigate(['login']);
  }

  addToNewsletter(): void {
    this._newsletter.hideModal('#newsletter-modal');

    this._newsletter.addSubscriptor({ email: this._auth.user.email })
      .subscribe(data => {
        this._newsletter.showNotification();
      });
  }

  confirmation(): void {
    this._newsletter.showModal('#newsletter-modal');
  }

  navigateAndHideModal(route: string, modal: string) {
    this._newsletter.hideModal(modal);
    this.router.navigate([route]);
  }
}
