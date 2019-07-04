import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { MenuComponent } from './menu/menu.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class PersonalModule { }
