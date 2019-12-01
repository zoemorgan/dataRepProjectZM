import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesReadComponent } from './modules-read/modules-read.component';
import { ModulesEditComponent } from './modules-edit/modules-edit.component';
import { ModulesCreateComponent } from './modules-create/modules-create.component';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatNativeDateModule, MatDatepickerModule,MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { TodoReadComponent } from './todo-read/todo-read.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulesReadComponent,
    ModulesEditComponent,
    ModulesCreateComponent,
    TodoReadComponent,
    TodoCreateComponent,
    TodoEditComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
