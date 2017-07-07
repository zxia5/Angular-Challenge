import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomepageComponent} from './components/homepage/homepage.component';
import {CategoryComponent} from './components/category/category.component';
import {CardSmallComponent} from './components/card-small/card-small.component';
import {RoutesModule} from "../routes.module";
import {DataService} from "./services/data.service";
import {HttpModule} from "@angular/http";
import { FooterComponent } from './components/footer/footer.component';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CategoryComponent,
    CardSmallComponent,
    FooterComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RoutesModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
