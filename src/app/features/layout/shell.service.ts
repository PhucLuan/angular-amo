import { Injectable } from '@angular/core';
import { Route, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

//@Injectable()
export class ShellService {
  //constructor() { }
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LayoutComponent,
      children: routes.concat({
        path: '',
        redirectTo: 'ahihi',
        pathMatch: 'full',
      }),
      //canActivate: [true],
      data: { reuse: true },
    };
  }
}
