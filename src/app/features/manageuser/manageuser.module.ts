import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageuserRoutingModule } from './manageuser-routing.module';
import { ManageuserComponent } from './manageuser.component';
@NgModule({
  imports: [CommonModule, ManageuserRoutingModule],
  declarations: [ManageuserComponent],
})
export class ManageuserModule {}
