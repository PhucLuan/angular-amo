import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'home',
      component: HomeComponent,
      data: { title: 'Home' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
