import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import "rxjs/add/operator/take";
import "rxjs/add/operator/map";

import { ITimeSerie } from '../time-serie';

@Injectable()
export class AlphaVantageApiService {

  constructor(private http: HttpClient) { }

  getBitCoinHistory(size: number, live: boolean = true): Promise<ITimeSerie> {
    const url = live ? `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=OJL446MIQFZVACMN`
                     : './assets/data/alphavantage-BCT.json';
    return this.http.get(url).take(1)
      .toPromise()
      .then(data => {
        let result: ITimeSerie;

        const content: [string, number][] = [];

        const bpiJSON = data['Time Series (Digital Currency Daily)'];
        const dates = Object.keys(data['Time Series (Digital Currency Daily)']);
        for (let dt of dates) {
          const value = bpiJSON[dt]['4a. close (USD)'];
          content.push([dt, value]);
        }

        return { data: content.slice(0, size) };
      });
  }

  getEthereumHistory(size: number, live: boolean = true): Promise<ITimeSerie> {
    const url = live ? `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ETH&market=USD&apikey=OJL446MIQFZVACMN`
                     : './assets/data/alphavantage-ETH.json';

    return this.http.get(url).take(1)
      .toPromise()
      .then(data => {
        let result: ITimeSerie;

        const content: [string, number][] = [];

        const bpiJSON = data['Time Series (Digital Currency Daily)'];
        const dates = Object.keys(data['Time Series (Digital Currency Daily)']);
        for (let dt of dates) {
          const value = bpiJSON[dt]['4a. close (USD)'];
          content.push([dt, value]);
        }

        return { data: content.slice(0, size) };
      });
  }

  getDashHistory(size: number, live: boolean = true): Promise<ITimeSerie> {
    const url = live ? `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=DASH&market=USD&apikey=OJL446MIQFZVACMN`
                     : './assets/data/alphavantage-DASH.json';

    return this.http.get(url).take(1)
      .toPromise()
      .then(data => {
        let result: ITimeSerie;

        const content: [string, number][] = [];

        const bpiJSON = data['Time Series (Digital Currency Daily)'];
        const dates = Object.keys(data['Time Series (Digital Currency Daily)']);
        for (let dt of dates) {
          const value = bpiJSON[dt]['4a. close (USD)'];
          content.push([dt, value]);
        }

        return { data: content.slice(0, size) };
      });
  }
}
