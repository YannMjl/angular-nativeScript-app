import { Component, OnInit } from "@angular/core";
import { Report } from "../shared/report";
import { ReportService } from "../shared/report.service";

@Component({
    selector: "dates-in-report",
    moduleId: module.id,
    templateUrl: "./date.component.html",
    styleUrls: ['date-common.css']
})
export class DisplayDateComponent implements OnInit {

    reports: Report[];

    constructor(
        private reportService: ReportService,
    ) {}

    ngOnInit() {
        console.log('initial get dates in report');

        this.reportService
            .getDateInReport()
            .subscribe(report => (this.reports= report));

    }

}
