import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Services/todo-service.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-todo-read',
  templateUrl: './todo-read.component.html',
  styleUrls: ['./todo-read.component.css']
})
export class TodoReadComponent implements OnInit {
  MyToDo: any = [];
  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    //all information is gotten from the database through the todo service and stored in the ToDo variable
    this.todoService.GetToDoInformation().subscribe((data) => {
      this.MyToDo = data.todo;
      console.log(this.MyToDo);
    })
  }

  onDeleteTodo(id:String){
    console.log("Deleting movie with id: "+id);
    //delete task by passing id to service whoch makes request to server, the page is then refreshed once the
    //task is deleted
    this.todoService.DeleteToDo(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }
}
