import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';

export const routes = [
  { path: '', component: HomeComponent },

  { path: 'collection/:category', component: CollectionComponent }
];