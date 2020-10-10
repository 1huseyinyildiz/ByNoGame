import { Category } from './../../../models/category';
import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { RootObject } from 'src/models/category';

@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   foods:Category[];
   p: number = 1;   
   constructor(private service: FoodService) { }

  ngOnInit(): void {
    this.service.getFood().subscribe(res=>{
      if(res){
        this.foods=res.categories;
      }
    })
  
  }
}
