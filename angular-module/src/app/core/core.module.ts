import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule }      from '@angular/common';
import { AppTitleComponent }    from './apptitle.component';
import { UserService }       from './user.service';

@NgModule({
	imports:[CommonModule],
	declarations:[AppTitleComponent],
	exports:[AppTitleComponent],
	providers:[UserService ]
})
export class CoreModule{}