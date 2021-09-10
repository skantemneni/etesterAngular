import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Testwithresponse } from '../models/etestermodel';
// import { DataSource } from '@angular/cdk/table';


const etesterdbApi:string = 'http://localhost:8081/data/usertest/usertestresponse/715';
const authToken: string = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXNpIiwiZXhwIjoxNjMxMzUyMjY2fQ.Q_RcGusU6qGUl12nY3rct32iZ_8Q4M9dkpn6ofWdz-vU3uW7fQozj5lRtqo3Wdoc6_3mDlMwFHi5mI2SUhfg-Q';
export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    'Authorization': authToken
  })
};


@Injectable({
  providedIn: 'root'
})
export class EtesterdbService {
//   private etesterdbApi:string = 'http://localhost:8081/data/usertest/usertestresponse/715';
//  private authToken: string = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXNpIiwiZXhwIjoxNjMxMzUyMjY2fQ.Q_RcGusU6qGUl12nY3rct32iZ_8Q4M9dkpn6ofWdz-vU3uW7fQozj5lRtqo3Wdoc6_3mDlMwFHi5mI2SUhfg-Q';

  constructor(private httpClient: HttpClient) { }

  getData():Observable<Testwithresponse>{

//    return this.httpClient.get<Testwithresponse>(this.etesterdbApi, {headers: new HttpHeaders().set('Authorization', 'authToken')});
  // var header = {
  //   headers: new HttpHeaders().
  //     set('Authorization',  this.authToken)
  // }

    return this.httpClient.get<Testwithresponse>(etesterdbApi, HTTP_OPTIONS);

  }

}
