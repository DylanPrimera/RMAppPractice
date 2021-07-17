import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { ErrorPageComponent } from '../../componenst/dummies/error-page/error-page.component';


@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
