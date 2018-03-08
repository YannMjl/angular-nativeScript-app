import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Report } from "../shared/report";
import { ReportService } from "../shared/report.service";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";


@Component({
    selector: "date-report",
    moduleId: module.id,
    templateUrl: "./date-report.component.html",
    styleUrls: ['date-report-common.css']
})
export class DateReportComponent implements OnInit {

    private report: ObservableArray<Report>;
    reports: Report[];
    date: Date;

    constructor(
        private reportService: ReportService,
        private route: ActivatedRoute,
    ) { this.date = route.snapshot.params['id']; }

    ngOnInit(): void {

        this.reportService
            .getReportByDate(this.date)
            .subscribe(report => (this.reports = report));

        this.report = new ObservableArray(this.reports);

    }

}
