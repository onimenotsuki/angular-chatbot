import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';

const appRoutes: Routes = [
  { path: '', component: ChatDialogComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
