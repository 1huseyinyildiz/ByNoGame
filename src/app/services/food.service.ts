import { RootObject } from '../../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url:string="https://www.themealdb.com/api/json/v1/1/categories.php";

  constructor(private http:HttpClient) { }
  getFood(){
    return this.http.get<RootObject>(this.url);
  }


}
