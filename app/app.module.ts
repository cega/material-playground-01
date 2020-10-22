import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { MaterialModule } from "./modules/material.module";

import { AppRoutingModule } from './app-routing.module';

import { DataService } from "./services/data";
import { AppComponent } from "./app.component";
import { CategoryComponent, QuestionComponent, TagComponent } from "./components";

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    QuestionComponent,
    TagComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { delay: 300 })
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
