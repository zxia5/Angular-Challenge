import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {

  topArticles = [];

  latestArticles = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    let sources = [];
    this.dataService.getSourceList().subscribe(res => {
      sources = res.json().sources;
      sources.slice(0, 5).forEach(source => {
        this.dataService.getArticles(source.id).subscribe(res => {
          this.topArticles.push(res.json().articles[1])
        });
      });
      sources.forEach(source => {
        if (source.sortBysAvailable.includes('latest')) {
          this.dataService.getArticles(source.id).subscribe(res=>{
            this.latestArticles.push(res.json().articles[0]);
          });
        }
      });
    });
  }

  goTo(url: string) {
    setTimeout(()=>window.open(url), 150);
  }

}
