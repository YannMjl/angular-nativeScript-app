import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { Page } from "ui/page";

@Component({
    selector: "ns-welcome",
    moduleId: module.id,
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome-common.css", "./welcome.css"],
})
export class WelcomeComponent implements OnInit {

    constructor(private page: Page) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    startBackgroundAnimation(background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    }

}