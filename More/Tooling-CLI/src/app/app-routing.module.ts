import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cars', loadChildren: './cars/cars.module#CarsModule' },
  { path: 'people', loadChildren: './people/people.module#PeopleModule' },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExampleAppRoutingModule { }
