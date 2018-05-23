import {Injectable} from '@angular/core';
import {Http} from  '@angular/http'
import 'rxjs/add/operator/toPromise'
@Injectable()
export class WebService {

   BASE_URL="http://localhost:1234/api";
  constructor( private http:Http) {
  }

  getMesseges(){
    return this.http.get(this.BASE_URL + "/messges").toPromise();
  }
  postMessges(post){
    return this.http.post(this.BASE_URL+"/messges",post).toPromise();
  }
}
