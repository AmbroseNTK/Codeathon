import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    SharedModule,
  ]
})
export class ExploreModule { }
