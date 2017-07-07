import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
  })
  export class HeaderComponent implements OnInit {

  userInput = '';

  categories = [
    'general',
    'business',
    'entertainment',
    'gaming',
    'music',
    'politics',
    'science',
    'sport',
    'technology'
  ];

  constructor(private dataService:DataService) {
  }

  ngOnInit() {
  }

}
