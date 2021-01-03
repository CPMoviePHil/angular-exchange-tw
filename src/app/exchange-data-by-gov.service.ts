import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParsedData } from './parsedData';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataByGovService {
  url = 'https://apiservice.mol.gov.tw/OdService/rest/datastore/A17030000J-000049-vY6';
  data;
  parsed;
  constructor(
    private http: HttpClient,
  ) { }
  getResponse(): Promise<object>{
    const promise = this.http.get<any>(this.url).toPromise(); // 0.2
    console.log(promise);
    return promise.then((data) => {
      this.data = data;
      return this.data.result.records.map((record) => {
        const temp = JSON.stringify(record);
        const temp2 = JSON.parse(temp);
        return new ParsedData(
          temp2["月別"],
          temp2["新台幣"],
          temp2["人民幣"],
          temp2["日圓"],
          temp2["韓元"],
          temp2["新加坡元"],
          temp2["歐元"],
          temp2["英鎊"],
          temp2["澳幣"],
        );
      });
    });
  }
}
