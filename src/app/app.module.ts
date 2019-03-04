import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataEditComponent } from './data-list/data-edit/data-edit.component';


const appRoutes: Routes = [
  { path: '', component: GreetingComponent },
  { path: 'data', component: DataListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    DataListComponent,
    DataEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
