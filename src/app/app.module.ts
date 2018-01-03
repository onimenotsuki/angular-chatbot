import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

// Services
import { AuthService } from './providers/auth.service';
import { NewsletterService } from './providers/newsletter.service';

// Guards
import { AuthGuard } from './auth.guard';

// Custom Modules
import { ChatModule } from './chat/chat.module';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './components/login/login.component';

import { environment } from '../environments/environment';
import { SafePipe } from './pipes/safe.pipe';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SafePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    PagesModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthService,
    NewsletterService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
