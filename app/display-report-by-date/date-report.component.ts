import { Report } from "../shared/report";
import { ActivatedRoute, Params } from "@angular/router";
import { ReportService } from "../shared/report.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

@Component({
    selector: "date-report",
    moduleId: module.id,
    templateUrl: "./date-report.component.html",
    styleUrls: ['date-report-common.css']
})
export class DateReportComponent implements OnInit {

    private items: ObservableArray<Report>;
    _items: Report[];
    date: Date;

    constructor(
        private reportService: ReportService,
        private route: ActivatedRoute,
    ) { this.date = route.snapshot.params['id']; }

    ngOnInit(): void {

        console.log("init generate report by date");

        this.reportService
            .getReportByDate(this.date)
            .subscribe(report => {
                this._items = report;
                this.items = new ObservableArray(report);
            });

    }

}
