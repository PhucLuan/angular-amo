import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../core/services/homeservice/home.service';
import { HomeComponent } from './home.component';
import { HomeTableComponent } from './home-table/home-table.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StatePidePipe } from '../../core/pide/state-pide.pipe';
import { HomeRoutingModule } from './home-routing.module';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, HomeTableComponent, StatePidePipe],
  providers: [HomeService],
})
export class HomeModule {}
