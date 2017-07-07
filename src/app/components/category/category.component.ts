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

  // Wait for animations before navigating to new window
  goTo(url: string) {
    setTimeout(() => window.open(url), 150);
  }

  ngOnInit() {
    // Observe routing between categories
    this.route.params.subscribe(res => {
        this.sortMode = 'Top To Bottom';
        this.currentCategory = res.category;
        // Update sources when user navigate to different category
        this.dataService.getSourceList(this.currentCategory).subscribe(res => {
          this.currentSources = res.json().sources;
          // Prepare to refresh articles list
          this.articlesFromCategory = [];
          // Go thru all sources and grab articles
          this.currentSources.forEach(source => {
            this.dataService.getArticles(source.id).subscribe(res => {
                res.json().articles.forEach(article => {
                  if (this.articlesFromCategory.length <= 70) {
                    // Push all articles intu articleList
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
