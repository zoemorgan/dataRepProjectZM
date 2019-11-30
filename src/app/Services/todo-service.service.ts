import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ToDo} from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http:HttpClient) { }

  GetToDoInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/todo');
  }

  AddToDoInformation(name:string,moduleName:string,dueDate:string,worthPercentage:string):Observable<any>{
    const todo:ToDo = {name:name, moduleName:moduleName, dueDate:dueDate, worthPercentage:worthPercentage};
    return this.http.post('http://localhost:4000/api/todo', todo);
  }

  DeleteToDo(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/todo/'+id);
  }

  GetTodo(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/todo/'+id);
  }

  UpdateToDo(id:String,name:string,moduleName:string,dueDate:string,worthPercentage:string):Observable<any>{
    const todo:ToDo = {name:name, moduleName:moduleName, dueDate:dueDate, worthPercentage:worthPercentage};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/todo/'+id, todo);
  }
}
