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
    this.todoService.GetToDoInformation().subscribe((data) => {
      this.MyToDo = data.todo;
      console.log(this.MyToDo);
    })
  }

  onDeleteTodo(id:String){
    console.log("Deleting movie with id: "+id);
    this.todoService.DeleteToDo(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }
}
