import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { ITag } from 'src/app/shared/models/ITag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?: ITag[];
  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }

}
