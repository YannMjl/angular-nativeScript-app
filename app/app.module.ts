import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routes, authProviders } from "./app.routing";

// app components
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./detail/item-detail.component";
import { ItemByDateComponent } from "./detail-date/item-detail-date.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HttpClientModule } from "@angular/common/http";
import {NativeScriptRouterModule } from "nativescript-angular/router";

// --- The built-in 'nativescript-pro-ui' modules
import { NativeScriptUIChartModule } from "nativescript-pro-ui/chart/angular";
import { NativeScriptUIListViewModule } from "nativescript-pro-ui/listview/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";
import { NativeScriptUICalendarModule } from "nativescript-pro-ui/calendar/angular";
import { NativeScriptUIDataFormModule } from "nativescript-pro-ui/dataform/angular";
// import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-pro-ui/autocomplete/angular";
// import { NativeScriptUIGaugesModule } from "nativescript-pro-ui/gauges/angular";


import { FileSizePipe, ItemService, LoginService } from "./shared";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        HttpClientModule,
        NativeScriptHttpModule,
        NativeScriptUIChartModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUICalendarModule,
        NativeScriptRouterModule,
        NativeScriptUIDataFormModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        FileSizePipe,
        ItemDetailComponent,
        ItemByDateComponent, 
        LoginComponent,
        WelcomeComponent
    ],
    providers: [
        ItemService,
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
