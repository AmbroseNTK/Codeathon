import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './states/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffect } from './states/effects/user.effect';
import { ChallengeEffect } from './states/effects/challenge.effect';
import { challengeReducer } from './states/reducers/challenge.reducer';
import { MarkdownModule } from 'ngx-markdown';
import { configReducer } from './states/reducers/config.reducer';
import { ConfigEffect } from './states/effects/config.effect';
import { HttpClientModule } from '@angular/common/http';
import { PersonalModule } from './modules/personal/personal.module';
import { categoriesReducer } from './states/reducers/categories.reducer';
import { CategoryEffects } from './states/effects/category.effect';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    StoreModule.forRoot({
      user: userReducer,
      challenges: challengeReducer,
      config: configReducer,
      categories: categoriesReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      UserEffect,
      ChallengeEffect,
      ConfigEffect,
      CategoryEffects
    ]),
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MarkdownModule.forRoot({}),
    HttpClientModule,
    PersonalModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
