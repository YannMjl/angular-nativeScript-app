import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { Page } from "ui/page";

import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Report } from "../shared/report";
import { ReportService } from "../shared/report.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ElementDef } from "@angular/core/src/view";

// define the constant url we would be uploading to
const apiUrl = 'https://web-server-reports.herokuapp.com/file';

@Component({
    selector: "upload-report",
    moduleId: module.id,
    templateUrl: "./upload.component.html",
    styleUrls: ["./upload-common.css", "./upload.css"],
})
export class UploadComponent implements OnInit {

    loading: false;
    // set report variable
    reportBydate: Report[];
    public reportDate: Date;

    constructor(private page: Page,
                private http: HttpClient,
                private reportService: ReportService,
                private el: ElementRef) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    startBackgroundAnimation(background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    }

    upload() {

        /*
        // tslint:disable-next-line:prefer-const
        let inputEl: HTMLInputElement = this.el.nativeElement.querySelector(
            '#photo'
        );

        const fileCount: number = inputEl.files.length;

        const formData = new FormData();

        this.reportDate = this.model.jsdate.toISOString();

        if (fileCount > 0) {

            
            formData.append('file', inputEl.files.item(0));
            formData.append('date', this.model.jsdate.toISOString());
            

            this.http
                .post(apiUrl, formData)
                .map((res: Response) => res.json())
                .subscribe(
                    success => {
                        alert('file uploaded succeful');
                    },

                    error => alert(error)
                );
                
        }
        */
    }

    getReportByDate(date: Date): void {
        console.log('get report after upload');

        this.reportService.getReportByDate(date)
            .subscribe(report => this.reportBydate = report);
    }

}