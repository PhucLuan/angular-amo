import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellService } from '../layout/shell.service';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: 'welcome',
      component: WelcomeComponent,
      data: { title: 'Welcome' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
