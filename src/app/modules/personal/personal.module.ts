import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { CompetitionComponent } from './competition/competition.component';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonalComponent, CompetitionComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSelectModule,
    FormsModule
  ]
})
export class PersonalModule { }
