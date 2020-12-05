import { Component, OnInit } from '@angular/core';
import { ExchangeDataByGovService } from '../exchange-data-by-gov.service';


@Component({
  selector: 'app-show-exchange-tw',
  templateUrl: './show-exchange-tw.component.html',
  styleUrls: ['./show-exchange-tw.component.css']
})
export class ShowExchangeTwComponent implements OnInit {
  data;
  constructor(
    private exchangeDataService: ExchangeDataByGovService,
  ) { }

  ngOnInit(): void {
    this.exchangeDataService.getResponse().then(
      (data) => {
        this.data = data;
        console.log('安安' + this.data);
      }
    );
  }

}
