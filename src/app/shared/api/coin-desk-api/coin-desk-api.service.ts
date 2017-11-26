import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import "rxjs/add/operator/take";
import "rxjs/add/operator/map";

import { IBpiHistory } from './bpiHistory'

@Injectable()
export class CoinDeskApiService {

  constructor(private http: HttpClient) { }

  getBpiHistory(start: string, end: string): Promise<IBpiHistory> {
    const url = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`;

    console.log('http', url);
    return this.http.get(url).take(1)
      .toPromise()
      .then(data => {
        let result: IBpiHistory;

        const bpi: [string, number][] = [];

        const bpiJSON = data['bpi'];
        const dates = Object.keys(data['bpi']);
        for (let dt of dates) {
          const value = bpiJSON[dt];
          bpi.push([dt, value]);
        }

        return { bpi };
      });
  }

}
