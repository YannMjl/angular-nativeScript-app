import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

import { Item } from "./item";

@Injectable()
export class ItemService {

    constructor(private http: HttpClient) { }

    /*private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
        { id: 3, name: "Piqué", role: "Defender" },
        { id: 4, name: "I. Rakitic", role: "Midfielder" },
        { id: 5, name: "Sergio", role: "Midfielder" },
        { id: 6, name: "Denis Suárez", role: "Midfielder" },
        { id: 7, name: "Arda", role: "Midfielder" },
        { id: 8, name: "A. Iniesta", role: "Midfielder" },
        { id: 9, name: "Suárez", role: "Forward" },
        { id: 10, name: "Messi", role: "Forward" },
        { id: 11, name: "Neymar", role: "Forward" },
        { id: 12, name: "Rafinha", role: "Midfielder" },
        { id: 13, name: "Cillessen", role: "Goalkeeper" },
        { id: 14, name: "Mascherano", role: "Defender" },
        { id: 17, name: "Paco Alcácer", role: "Forward" },
        { id: 18, name: "Jordi Alba", role: "Defender" },
        { id: 19, name: "Digne", role: "Defender" },
        { id: 20, name: "Sergi Roberto", role: "Midfielder" },
        { id: 21, name: "André Gomes", role: "Midfielder" },
        { id: 22, name: "Aleix Vidal", role: "Midfielder" },
        { id: 23, name: "Umtiti", role: "Defender" },
        { id: 24, name: "Mathieu", role: "Defender" },
        { id: 25, name: "Masip", role: "Goalkeeper" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }*/

    getReports(): Observable<Item[]> {
        const apiUrl = 'https://web-server-reports.herokuapp.com/report';

        return this.http.get<Item[]>(apiUrl);
    }

    getDateInReport(): Observable<Item[]> {
        const apiUrl = 'https://web-server-reports.herokuapp.com/date';

        return this.http.get<Item[]>(apiUrl);
    }

    getReportByName(name: string): Observable<Item[]> {
        const apiUrl = 'https://web-server-reports.herokuapp.com/name/' + name;

        return this.http.get<Item[]>(apiUrl);
    }

    getReportByDate(date: Date): Observable<Item[]> {
        const apiUrl = 'https://web-server-reports.herokuapp.com/date/' + date;

        return this.http.get<Item[]>(apiUrl);
    }

    deleteReport(): Observable<Item[]> {
        const apiUrl = 'https://web-server-reports.herokuapp.com/delete-all-record';

        return this.http.get<Item[]>(apiUrl);
    }

    deleteReportByName(name: string): Observable<Item[]> {
        const apiUrl =
            'https://web-server-reports.herokuapp.com/delete-name/' + name;

        return this.http.get<Item[]>(apiUrl);
    }

    deleteReportByDate(date: Date): Observable<Item[]> {
        const apiUrl =
            'https://web-server-reports.herokuapp.com/delete-date/' + date;

        return this.http.get<Item[]>(apiUrl);
    }
}
