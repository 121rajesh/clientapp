import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) 
  {

  }

  GetData()
  {
   return this.http.get("http://200.0.1.217:4000/employees");
  }

  AddData(emp:any)
  {
    return this.http.post("http://200.0.1.217:4000/employees",emp);
  }

  DeleteData(S_No:any)
  {
    return this.http.delete("http://200.0.1.217:4000/employees/"+S_No);
  }
  GetDataById(S_No:any)
  {
    return this.http.get("http://200.0.1.217:4000/employees/"+S_No);
  }
}
