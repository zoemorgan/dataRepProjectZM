import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ModulesReadComponent} from './modules-read/modules-read.component';
import {ModulesEditComponent} from'./modules-edit/modules-edit.component';
import {ModulesCreateComponent} from './modules-create/modules-create.component';
import {TodoReadComponent} from './todo-read/todo-read.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {TodoCreateComponent} from './todo-create/todo-create.component';

const routes: Routes = [
  {
    path: 'modulesRead',
    component: ModulesReadComponent
  },
  {
    path: 'modulesEdit/:id',
    component: ModulesEditComponent
  },
  {
    path: 'modulesCreate',
    component: ModulesCreateComponent
  },
  {
    path: 'todoRead',
    component: TodoReadComponent
  },
  {
    path: 'todoEdit/:id',
    component: TodoEditComponent
  },
  {
    path: 'todoCreate',
    component: TodoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
