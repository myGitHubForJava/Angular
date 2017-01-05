import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { Hero,
         HeroService } from './hero.service';


@Component({
  styleUrls:['./hero.component.css'],
  template: `
    <h3 highlight>Hero List</h3>
	<ul class="heroes">
    <li *ngFor='let hero of heroes | async' [class.selected]="isSelected(hero)">
      <a routerLink="{{hero.id}}" ><span class="badge">{{hero.id}}</span> {{hero.name}}</a>
    </li>
	</ul>
  `
}) 
export class HeroListComponent implements OnInit{
	heroes:Observable<Hero[]>;
	private selectedId:number;
	constructor(private heroService:HeroService,private route:ActivatedRoute,private router:Router){}
	
	ngOnInit(){
		this.heroes=this.route.params.switchMap((params:Params)=>{
			this.selectedId=+params['id'];
			return this.heroService.getHeroes();
			});
	}
	
	isSelected(hero:Hero){return hero.id==this.selectedId;}
}