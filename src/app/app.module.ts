import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//import components
import { AppComponent } from './app.component';
import { ModulesReadComponent } from './modules-read/modules-read.component';
import { ModulesEditComponent } from './modules-edit/modules-edit.component';
import { ModulesCreateComponent } from './modules-create/modules-create.component';
import { TodoReadComponent } from './todo-read/todo-read.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { HomePageComponent } from './home-page/home-page.component';
//other imports for functionality
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatNativeDateModule, MatDatepickerModule,MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

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
    MatSelectModule,
    Ng2SearchPipeModule,
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
