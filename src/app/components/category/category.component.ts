import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  currentSources = [];
  articlesFromCategory = [];
  currentCategory: string;
  sortMode = 'Top To Bottom';

  goTo(url: string) {
    setTimeout(() => window.open(url), 150);
  }

  ngOnInit() {
    this.route.params.subscribe(res => {
        this.currentCategory = res.category;
        this.dataService.getSourceList(this.currentCategory).subscribe(res => {
          this.currentSources = res.json().sources;
          this.articlesFromCategory = [];
          this.currentSources.forEach(source => {
            console.log(source.sortBysAvailable);
            this.dataService.getArticles(source.id).subscribe(res => {
                res.json().articles.forEach(article => {
                  if (this.articlesFromCategory.length <= 70) {
                    this.articlesFromCategory.push(article);
                  }
                });
              }
            );
          })
        });
      }
    );
  }
}
