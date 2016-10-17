import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';

import { HeroService }          from './hero.service';

import './rxjs-extensions';

@NgModule({
  imports:  [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
