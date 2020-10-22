import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  SERVER_URL: string = "http://localhost:3000/api/";
  constructor(private httpClient: HttpClient) {}

  public getCategories() {
    return this.httpClient.get(this.SERVER_URL + "categories");
  }

  public getCategory(categoryId) {
    return this.httpClient.get(
      `${this.SERVER_URL + "categories"}/${categoryId}`
    );
  }

  public createCategory(category: {
    id: number;
    categoryName: string;
  }) {
    return this.httpClient.post(`${this.SERVER_URL + "categories"}`, category);
  }

  public deleteCategory(categoryId) {
    return this.httpClient.delete(
      `${this.SERVER_URL + "categories"}/${categoryId}`
    );
  }

  public updateCategory(category: {
    id: number;
    name: number;
  }) {
    return this.httpClient.put(
      `${this.SERVER_URL + "categories"}/${category.id}`,
      category
    );
  }
}
