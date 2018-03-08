// import route modules
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// import app components 
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { DisplayDateComponent } from "./display-dates-in-report/date.component";
import { DateReportComponent } from "./display-report-by-date/date-report.component";
import { DisplayOrganizationComponent } from "./display-organizations-in-report/organization.component";
import { OrganizationReportComponent } from "./display-report-by-organization/organization-report.component";

import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
    AuthGuard
];

export const routes = [
    { path: "", redirectTo: "/welcome", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "organization-list", component: DisplayOrganizationComponent  },
    { path: "dates-in-report", component: DisplayDateComponent },
    { path: "org-report/:id", component: OrganizationReportComponent },
    { path: "date-report/:id", component: DateReportComponent }
];

/*@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }*/