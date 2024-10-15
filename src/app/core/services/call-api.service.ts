import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {
userObj = new Array();
private httpObj: any ={
  type:'',
  url:'',
  option: Object,
};

  constructor(private http: HttpClient, private router: Router) { }

  getBaseurl(url: string){
    switch(url){
      case 'baseURL': return 'https://priyadarshaniapi.mahamining.com/';
      break;
      default:
        return '';
        break;
    }
  }

  getHttp(): any{
    this.httpObj.option.body && delete this.httpObj.option.body;
    this.httpObj.option.params && delete this.httpObj.option.params;
    return this.http.request(
      this.httpObj.type,
      this.httpObj.url,
      this.httpObj.options,
    );
  }
  setHttp(
    type: string,
    url: string,
    isHeader: Boolean,
    obj: any,
    params: any,
    baseUrl: any,
  ){
    try{
      // this.userObj = JSON.parse(sessionStorage.loggedDetails);
    }catch(e) {}
    this.clearHttp();
    this.httpObj.type = type;
    this.httpObj.url = this.getBaseurl(baseUrl) + url;
    if (isHeader) {
      let tempObj: any ={
          // "Authorization" : "Bearer" + this.userObj.responseData3.accessToken //token set
      };
      this.httpObj.options.headers = new HttpHeaders(tempObj);
    }

    obj !== false
    ? (this.httpObj.options.body = obj)
    :(this.httpObj.options.body = false);
    params !== false
    ? (this.httpObj.options.params = params)
    : (this.httpObj.options.params = false)
   }

   clearHttp(){
    this.httpObj.type = '';
    this.httpObj.url = '';
    this.httpObj.options = '';
   }
}
