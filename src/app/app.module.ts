import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// components
import { AppComponent } from './app.component';

// Services
import { AuthService } from './providers/auth.service';

// Guards
import { AuthGuard } from './auth.guard';

// Custom Modules
import { ChatModule } from './chat/chat.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';

import { environment } from '../environments/environment';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    ChatModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
