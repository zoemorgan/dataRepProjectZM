import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Module} from '../module.model';

@Injectable({
  providedIn: 'root'
})
export class ModuleServiceService {

  constructor(private http:HttpClient) { }

  GetModuleInformation():Observable<any>{
    return this.http.get('http://localhost:4000/api/modules');
  }

  AddModuleInformation(name:string,lecturer:string,duration:string,worthCredits:string):Observable<any>{
    const module:Module = {name:name, lecturer:lecturer, duration:duration, worthCredits:worthCredits};
    return this.http.post('http://localhost:4000/api/modules', module);
  }

  DeleteModule(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/modules/'+id);
  }

  GetModule(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/modules/'+id);
  }

  UpdateModule(id:String,name:string, lecturer:string, duration:string, worthCredits: string):Observable<any>{
    const module:Module = {name:name, lecturer:lecturer, duration:duration, worthCredits: worthCredits};
    console.log("Edit"+id);
    return this.http.put('http://localhost:4000/api/modules/'+id, module);
  }


}
