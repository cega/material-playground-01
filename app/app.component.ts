import { Component, OnInit } from "@angular/core";
import { VERSION } from "@angular/material/core";

import { CategoryService } from './services/category';
import { QuestionService } from './services/question';

import data from "./data/db.json";

@Component({
  selector: "material-app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent implements OnInit {
  public items: string[] = ["Item 1", "Item 2", "Item 3"];

  version = VERSION;
  constructor (
    private categoryService: CategoryService,
    private questionService: QuestionService
  ) {}
  ngOnInit() {
    // console.log(data);
    this.categoryService.getCategories().subscribe(
      (categories) => {
        console.log('Categories:', categories);
        return categories;
      }
    )
    this.questionService.getQuestions().subscribe(
      (questions) => {
        console.log('Questions:', questions);
        return questions;
      }
    )
  }
}

