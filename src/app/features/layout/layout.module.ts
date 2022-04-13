import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgbdDropdownBasic } from '../../shared/header/dropdown-basic/dropdown-basic';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    NgbdDropdownBasic,
  ],
})
export class LayoutModule {}
