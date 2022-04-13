import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageassetRoutingModule } from './manageasset-routing.module';
import { ManageassetComponent } from './manageasset.component';

@NgModule({
  imports: [CommonModule, ManageassetRoutingModule],
  declarations: [ManageassetComponent],
})
export class ManageassetModule {}
