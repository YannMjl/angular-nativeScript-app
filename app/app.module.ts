import { routes, authProviders } from "./app.routing";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FileSizePipe, ReportService, LoginService } from "./shared";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

// import app components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UploadComponent } from "./upload-report/upload.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { DisplayDateComponent } from "./display-dates-in-report/date.component";
import { DateReportComponent } from "./display-report-by-date/date-report.component";
import { DisplayOrganizationComponent } from "./display-organizations-in-report/organization.component";
import { OrganizationReportComponent } from "./display-report-by-organization/organization-report.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { HttpClientModule } from "@angular/common/http";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// --- The built-in 'nativescript-pro-ui' modules
import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { NativeScriptUICalendarModule } from "nativescript-pro-ui/calendar/angular";
import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";
//import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-pro-ui/autocomplete/angular";
//import { NativeScriptUIGaugesModule } from "nativescript-pro-ui/gauges/angular";
 
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [   
        HttpClientModule,
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptUIChartModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIDataFormModule,
        NativeScriptUISideDrawerModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        FileSizePipe,
        LoginComponent,
        UploadComponent,
        WelcomeComponent,
        DateReportComponent,
        DisplayDateComponent, 
        OrganizationReportComponent,
        DisplayOrganizationComponent
    ],
    providers: [
        ReportService,
        LoginService,
        authProviders
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
