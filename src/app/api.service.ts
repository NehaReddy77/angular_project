import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl="http://127.0.0.1:8000";
  headers=new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  getAllColleges(){
    return this.http.get("http://127.0.0.1:8000/api/vi/colleges/");
  }
getOneCollege(id){
return this.http.get("http://127.0.0.1:8000/api/vi/college/"+id);
}
updateCollege(college){
return this.http.put("http://127.0.0.1:8000/api/vi/colleges/"+id);
}
createCollege(college){
return this.http.post("http://127.0.0.1:8000/api/vi/colleges/"+id);
}
deleteCollege(id){
return this.http.delete("http://127.0.0.1:8000/api/vi/colleges/"+id);
}
}
