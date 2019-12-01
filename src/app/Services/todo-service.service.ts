import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ToDo} from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http:HttpClient) { }

  //get all to do information by sending a get request to the server
  GetToDoInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/todo');
  }

  //add a to do task to the db by sending a post request to the server along with the information gathered from the form
  AddToDoInformation(name:string,moduleName:string,dueDate:string,worthPercentage:string):Observable<any>{
    const todo:ToDo = {name:name, moduleName:moduleName, dueDate:dueDate, worthPercentage:worthPercentage};
    return this.http.post('http://localhost:4000/api/todo', todo);
  }

  //delete a to do task from the db by sending the server a delete request along with the id of the task you wish to delete
  DeleteToDo(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/todo/'+id);
  }

  //get a tasks information by sending the server a get request along with the id of the task you wish to retrieve
  GetTodo(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/todo/'+id);
  }

  //update a task by sending the server a put request along withthe id of the task you wish to update and informetion gathered from the form.
  UpdateToDo(id:String,name:string,moduleName:string,dueDate:string,worthPercentage:string):Observable<any>{
    const todo:ToDo = {name:name, moduleName:moduleName, dueDate:dueDate, worthPercentage:worthPercentage};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/todo/'+id, todo);
  }
/*
  SearchByModule(moduleName:string, criteria: string){
    return this.http.get('/api/todo/search/' +moduleName +criteria);
  }*/
}
