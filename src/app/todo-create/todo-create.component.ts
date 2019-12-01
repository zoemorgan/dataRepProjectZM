import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{TodoServiceService} from '../Services/todo-service.service';
import { ModuleServiceService } from '../Services/module-service.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent implements OnInit {

  constructor(private todoService: TodoServiceService, private moduleService: ModuleServiceService) { }

  MyModules: any =[];

  ngOnInit() {
    //get module information from DB to be used in module select drop down and store in MyModules variable
    this.moduleService.GetModuleInformation().subscribe((data) => {
      this.MyModules = data.modules;
      console.log(this.MyModules);
    })
  }

  onAddToDo(form: NgForm) {
    
    //if form is not valid it will not be submitted
    if(!form.valid)
    {
      return;
    }

    console.log(form.value.moduleName);

    //values from the form are passed to the todo service where they will be passed tot he server and added to the db
    this.todoService.AddToDoInformation(form.value.name,
      form.value.moduleName, form.value.dueDate, form.value.worthPercentage).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );
    console.log(form.value);
    form.resetForm();
  }
}
