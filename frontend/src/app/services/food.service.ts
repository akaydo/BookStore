import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
  FOOD_BY_ID_URL,
} from '../shared/constants/urls';
import { IFood } from '../shared/models/IFood';
import { ITag } from '../shared/models/ITag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  // getAll(): IFood[]{
  //   return sample_foods;
  // }

  getAll(): Observable<IFood[]> {
    return this.http.get<IFood[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<IFood[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<ITag[]> {
    return this.http.get<ITag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<IFood[]> {
    return tag === 'All'
      ? this.getAll()
      : this.http.get<IFood[]>(FOODS_BY_TAG_URL + tag);
  }

  getFoodById(foodId: string): Observable<IFood> {
    return this.http.get<IFood>(FOOD_BY_ID_URL + foodId);
  }
}
