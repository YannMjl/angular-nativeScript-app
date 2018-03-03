import { Component, OnInit } from "@angular/core";
import { Item } from "../shared/item";
import { ItemService } from "../shared/item.service";

@Component({
    selector: "ns-dates",
    moduleId: module.id,
    templateUrl: "./item-detail-date.component.html",
    styleUrls: ['item-common.css']
})
export class ItemByDateComponent implements OnInit {

    items: Item[];

    constructor(
        private itemService: ItemService,
    ) {}

    ngOnInit() {
        console.log('initial get dates in report');

        this.itemService
            .getDateInReport()
            .subscribe(report => (this.items= report));

    }

}
