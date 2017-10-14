import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestProvider {
  private apiUrl = 'https://api.coinmarketcap.com/v1/ticker/';
  coinData: any;
  limit: number = 20;
  currency: string = 'CAD';

  constructor(private http: HttpClient) {
    this.getTicker(this.currency, this.limit);
  }

  getTicker(currency: string, limit: number) {
    if (!currency || !limit) {
      console.log('An error occurred: Missing parameters for API endpoint');
      return;
    }

    let query = this.apiUrl + '?convert=' + currency + '&limit=' + limit;
    console.log(query);

    this.http.get(query).subscribe(data => {
      this.coinData = data;
      console.log(data);
    }, (err: HttpErrorRespone) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    })
  }

}
