import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  // Articles to show in carousel
  topArticles = [];

  // Articles to show in Latest News
  latestArticles = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    // Get top articles when loading homepage
    let sources = [];
    // Get all sources available
    this.dataService.getSourceList().subscribe(res => {
      sources = res.json().sources;
      // Get top 5 of them
      sources.slice(0, 5).forEach(source => {
        this.dataService.getArticles(source.id).subscribe(res => {
          // Get the second article of each source
          this.topArticles.push(res.json().articles[1])
        });
      });
      // Get all latest news
      sources.forEach(source => {
        if (source.sortBysAvailable.includes('latest')) {
          this.dataService.getArticles(source.id).subscribe(res=>{
            this.latestArticles.push(res.json().articles[0]);
          });
        }
      });
    });
  }

  // Wait for animation to complete before navigating.
  goTo(url: string) {
    setTimeout(()=>window.open(url), 150);
  }

}
