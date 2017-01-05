import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params }    from '@angular/router';

import { Hero,
         HeroService }    from './hero.service';
		 
@Component({
  template: `
    <h3 highlight>Hero Detail</h3>
    <div *ngIf="hero">
      <div>Id: {{hero.id}}</div><br>
      <label>Name:
        <input [(ngModel)]="hero.name">
      </label>
	   <p>
      <button (click)="gotoHeroes()">Back</button>
    </p>
    </div>
    <br>
    <a routerLink="../">Hero List</a>
  `
})
export class HeroDetailComponent implements OnInit{
	hero:Hero;
	
	constructor(
	 private route:ActivatedRoute,
	 private heroService:HeroService,
	 private router:Router
	){}
	
	gotoHeroes(){
		let heroId=this.hero?this.hero.id:null;
		this.router.navigate(['/heroes',{id:heroId,foo:'poo'}]);
	}
	
//  ngOnInit() {
//    let id = parseInt(this.route.snapshot.params['id'], 10);
//    this.heroService.getHero(id).then(hero => this.hero = hero);
//  }

    ngOnInit(){
		this.route.params
		     .switchMap((params:Params)=>this.heroService.getHero(+params['id']))
			 .subscribe((hero:Hero)=>this.hero=hero);
	}
}