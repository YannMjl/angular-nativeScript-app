import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "../shared/item";
import { ItemService } from "../shared/item.service";
import { ObservableArray } from "tns-core-modules/data/observable-array";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {

    private _items: ObservableArray<Item>;

    reportByNames: Item[];
    orgName: string;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
    ) { this.orgName = route.snapshot.params['id']; }

    ngOnInit(): void {
        // const id = +this.route.snapshot.params["id"];
        // this.item = this.itemService.getItem(id);

        //this._items = new ObservableArray(this.itemService.getReportByName(this.orgName));

        this.itemService
            .getReportByName(this.orgName)
            .subscribe(report => (this.reportByNames = report));
    }
}
