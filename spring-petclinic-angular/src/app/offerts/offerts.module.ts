import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffertAddComponent } from './offert-add/offert-add.component';
import { OffertDetailComponent } from './offert-detail/offert-detail.component';
import { OffertEditComponent } from './offert-edit/offert-edit.component';
import { OffertListComponent } from './offert-list/offert-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OffertAddComponent, OffertDetailComponent, OffertEditComponent, OffertListComponent]
})
export class OffertsModule { }
