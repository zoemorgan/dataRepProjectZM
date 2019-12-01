import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService {

  constructor(private http:HttpClient) { }

  //get all modules information by sending a get request to the server
  GetModuleInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/modules');
  }


  //add the module to the database by sending the server a post request and all info gathered from the form
  AddModuleInformation(name:string,lecturer:string,duration:string,worthCredits:string):Observable<any>{
    const module:Module = {name:name, lecturer:lecturer, duration:duration, worthCredits:worthCredits};
    return this.http.post('http://localhost:4000/api/modules', module);
  }

  //delete the module according to the id by sending delete request to server
  DeleteModule(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/modules/'+id);
  }

  //get module by id by sending a get request to the server along with the id of the module you wish to retrieve
  GetModule(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/modules/'+id);
  }

  //update the module by sending a put request to the server along with the id for the module you wish to update and the information gethered from the form
  UpdateModule(id:String,name:string, lecturer:string, duration:string, worthCredits: string):Observable<any>{
    const module:Module = {name:name, lecturer:lecturer, duration:duration, worthCredits: worthCredits};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/modules/'+id, module);
  }


}
