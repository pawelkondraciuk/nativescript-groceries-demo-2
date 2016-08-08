import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {LoginComponent} from "./pages/login/login.component";
import {ListComponent} from "./pages/list/list.component";

@Component({
  selector: "groceries-app",
  template: "<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES]
})
export class GroceriesAppComponent {}
