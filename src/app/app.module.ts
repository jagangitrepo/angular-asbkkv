import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoAppComponent, TodoListComponent, TodoComponent } from './todoapp.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TodoAppComponent, TodoListComponent, TodoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
