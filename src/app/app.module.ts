import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AuthModule,
  LogLevel,
  OidcConfigService,
} from 'angular-auth-oidc-client';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeModule } from './features/home/home.module';
//import { HeaderComponent } from './shared/header/header.component';
import { ManageuserComponent } from './features/manageuser/manageuser.component';
//import { SidebarComponent } from './shared/sidebar/sidebar.component';
//import { ManageassetComponent } from './features/manageasset/manageasset.component';
import { TableComponent } from './features/home/table/table.component';
import { AuthInterceptorService } from './core/services/auth-interceptor.service';
//import { NgbdDropdownBasic } from './shared/header/dropdown-basic/dropdown-basic';
import { WelcomeComponent } from './features/welcome/welcome.component';
//import { LayoutComponent } from './features/layout/layout.component';
import { ManageassetModule } from './features/manageasset/manageasset.module';
import { LayoutModule } from './features/layout/layout.module';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
    oidcConfigService.withConfig({
      clientId: 'angular',
      stsServer: 'https://localhost:5001',
      responseType: 'code',
      redirectUrl: 'https://angular-ivy-qfiesp.stackblitz.io',
      postLogoutRedirectUri: 'https://angular-ivy-qfiesp.stackblitz.io',
      scope: 'openid profile roles',
      //logLevel: LogLevel.Debug,
    });
}

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    ManageuserComponent,
    //SidebarComponent,
    TableComponent,
    WelcomeComponent,
    //LayoutComponent,
    //NgbdDropdownBasic,
  ],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule.forRoot(),
    HttpClientModule,
    NgbModule,
    HomeModule,
    LayoutModule,
    ManageassetModule,
    AppRoutingModule,
  ],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
