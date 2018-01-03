import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PrivacyComponent,
    TermsComponent,
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    PrivacyComponent,
    TermsComponent,
    FooterComponent
  ]
})
export class PagesModule { }
