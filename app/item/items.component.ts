import { Component, OnInit } from "@angular/core";

import { Item } from "../shared/item";
import { ItemService } from "../shared/item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ['item-common.css']
})
export class ItemsComponent implements OnInit {
    items: Item[];

    reportDate: Item[];
    reportsByName: Item[];
    reportsByDate: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        //this.items = this.itemService.getItems();
        console.log('in');
        this.getReports();
        this.getDateInReport();
    }

    getReports(): void {
        console.log('in report');
        this.itemService
            .getReports()
            .subscribe(reports => (this.items = reports));
    }

    getDateInReport(): void {
        this.itemService
            .getDateInReport()
            .subscribe(reports => (this.reportDate = reports));
    }

    getreportByName(name: string): void {
        console.log('in report name');
        this.itemService
            .getReportByName(name)
            .subscribe(reports => (this.reportsByName = reports));
    }

    getreportBydate(date: Date): void {
        console.log('in report date');
        this.itemService
            .getReportByDate(date)
            .subscribe(reports => (this.reportsByDate = reports));
    }

    deleteAllReport() {
        if (confirm('Are you sure you want to delete this record?')) {
            console.log('delete report');

            this.itemService
                .deleteReport()
                .subscribe(report => (this.items = report));
        }
    }
}