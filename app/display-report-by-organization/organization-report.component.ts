import { Report } from "../shared/report";
import { ActivatedRoute, Params } from "@angular/router";
import { ReportService } from "../shared/report.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "org-report",
    moduleId: module.id,
    templateUrl: "./organization-report.component.html",
    styleUrls: ['organization-report-common.css']
})
export class OrganizationReportComponent implements OnInit {

    items: Report[];
    orgName: string;

    constructor(
        private reportService: ReportService,
        private route: ActivatedRoute,
    ) { this.orgName = route.snapshot.params['id']; }

    ngOnInit(): void {

        //this.items = new ObservableArray(this.itemService.getReportByName(this.orgName));

        this.reportService
            .getReportByName(this.orgName)
            .subscribe(reports => (this.items = reports));

        
    }

}
