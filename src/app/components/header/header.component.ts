import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  categories = [
    {display:'general', category: 'general'},
    {display:'business', category: 'business'},
    {display:'entertainment', category: 'entertainment'},
    {display:'gaming', category: 'gaming'},
    {display:'music', category: 'music'},
    {display:'politics', category: 'politics'},
    {display:'science', category: 'science-and-nature'},
    {display:'sport', category: 'sport'},
    {display:'technology', category: 'technology'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
