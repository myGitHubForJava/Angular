import {Component,Input} from '@angular/core';

import {UserService} from './user.service';

@Component({
	selector:'app-title',
	templateUrl:'app/apptitle.component.html'
})
export class AppTitleComponent{
	@Input() subtitle='';
	title='app-module';
	user='';
	
	constructor(userService:UserService){
		this.user=userService.userName;
	}
}