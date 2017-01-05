import { Injectable } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string) { }
}

const HEROES: Hero[] = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];
const FETCH_LATENCY = 500;

let heroesPromise=Promise.resolve(HEROES);

@Injectable()
export class HeroService{
//	getHeroes(){
//		return new Promise<Hero[]>(resolve=>{
//			setTimeout(()=>{resolve(HEROES);},FETCH_LATENCY);
//		});
//	}
       
	 getHeroes(){
		 return heroesPromise;
	 }
	  

	getHero(id){
		 return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === +id));
	}
}