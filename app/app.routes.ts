import {RouterConfig, provideRouter} from '@angular/router';

import {LoginComponent} from "./pages/login/login.component";
import {ListComponent} from "./pages/list/list.component";

const routes: RouterConfig = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes, { enableTracing: false })
];