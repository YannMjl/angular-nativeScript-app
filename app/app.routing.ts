import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./detail/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ItemByDateComponent } from "./detail-date/item-detail-date.component";

import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
    AuthGuard
];

export const routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "welcome", component: WelcomeComponent },
    { path: "items", component: ItemsComponent },
    { path: "dates", component: ItemByDateComponent },
    { path: "item/:id", component: ItemDetailComponent },
    
];

/*@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }*/