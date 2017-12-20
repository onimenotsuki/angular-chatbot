import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PrivacyComponent,
    TermsComponent
  ],
  exports: [
    PrivacyComponent,
    TermsComponent
  ]
})
export class PagesModule { }
