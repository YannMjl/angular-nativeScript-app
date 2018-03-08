import { Component, OnInit } from "@angular/core";

import { Report } from "../shared/report";
import { ReportService } from "../shared/report.service";

@Component({
    selector: "organization-list",
    moduleId: module.id,
    templateUrl: "./organization.component.html",
    styleUrls: ['organization-common.css']
})
export class DisplayOrganizationComponent implements OnInit {
    items: Report[];

    constructor(private reportService: ReportService) { }

    ngOnInit(): void {
        //this.items = this.itemService.getItems();
        console.log('init oragization list in report');
        this.getReports();
    }

    getReports(): void {
        console.log('in report');
        this.reportService
            .getReports()
            .subscribe(reports => (this.items = reports));
    }
}