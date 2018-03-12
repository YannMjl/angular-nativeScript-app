import { Report } from "../shared/report";
import { Component, OnInit } from "@angular/core";
import { ReportService } from "../shared/report.service";
import { LoadingIndicator } from "nativescript-loading-indicator";

@Component({
    selector: "organization-list",
    moduleId: module.id,
    templateUrl: "./organization.component.html",
    styleUrls: ['organization-common.css']
})
export class DisplayOrganizationComponent implements OnInit {

    items: Report[];
    public isBusy = true;

    constructor(private reportService: ReportService) { }

    ngOnInit(): void {
        //this.items = this.itemService.getItems();
        console.log('init oragization list in report');
        this.getReports();
    }

    getReports(): void {
        
        this.reportService
            .getReports()
            .subscribe(
                report => {
                this.items = report;
                this.isBusy = false;
                },
                err => {
                    console.log("Error occured.");
                    console.log(err);
            }
        );
    }
}