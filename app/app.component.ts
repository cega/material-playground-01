import {Component} from '@angular/core';
import {VERSION} from '@angular/material/core';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent { 
  public items: string[] = [
    "Item 1",
    "Item 2",
    "Item 3",
  ];

  version = VERSION;
}
