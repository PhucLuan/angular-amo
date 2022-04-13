import { Component, Input, OnChanges } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'ngbd-dropdown-basic',
  templateUrl: './dropdown-basic.html',
})
export class NgbdDropdownBasic {
  public username: string;
  public test: string;
  @Input() item = 'ahihi'; // decorate the property with @Input()

  constructor(private oidcSecurityService: OidcSecurityService) {
    this.username = localStorage.getItem('user');
  }
  logout() {
    localStorage.removeItem('user');
    this.oidcSecurityService.logoff();
  }
  ngOnInit() {
    this.test = this.item;
    console.log(this.test + ' ' + 'oninit');
  }
  ngOnChanges() {
    this.test = this.item;
    console.log(this.test);
  }
}
