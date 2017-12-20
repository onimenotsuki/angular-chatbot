import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';

// Guards
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  { path: '', component: ChatDialogComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'politica-de-privacidad', component: PrivacyComponent },
  { path: 'terminos-del-servicio', component: TermsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
