import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {TodoServiceService} from '../Services/todo-service.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  todo:any=[];

  constructor(private todoService:TodoServiceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    //get the information from the db by passing the id to the todo service which sends a get request to the server
    this.todoService.GetTodo(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.todo = data;
          console.log("edit module thingy: "+this.todo);
      }
    );
  }

  onEditToDo(form:NgForm){
    console.log(form.value.name);
    //values gethered from the form are passed to the todo service and then onto the server where the 
    //task will be updated in the db
    this.todoService.UpdateToDo(this.todo._id, form.value.name,
      form.value.moduleName, form.value.dueDate, form.value.worthPercentage).subscribe();
  }
}
