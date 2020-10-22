import { InMemoryDbService } from "angular-in-memory-web-api";

import { Category } from "./models/category";

export class CategoryDb implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      {
        id: 1,
        categoryName: "Special"
      },
      {
        id: 2,
        categoryName: "Programming"
      },
      {
        id: 3,
        categoryName: "Architecture"
      },
      {
        id: 4,
        categoryName: "Networking/Infrastructure"
      },
      {
        id: 5,
        categoryName: "Database"
      },
      {
        id: 6,
        categoryName: "Dev Ops"
      },
      {
        id: 7,
        categoryName: "UX/UI"
      }
    ];
    return { categories };
  }
}
