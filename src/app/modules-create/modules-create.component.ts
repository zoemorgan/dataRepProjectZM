import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{ModuleServiceService} from '../Services/module-service.service';

@Component({
  selector: 'app-modules-create',
  templateUrl: './modules-create.component.html',
  styleUrls: ['./modules-create.component.css']
})
export class ModulesCreateComponent implements OnInit {
  constructor(private moduleService: ModuleServiceService) { }

  ngOnInit() {
  }

  onAddModule(form: NgForm) {
    
    //if the from is not valid it wont be submitted
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);

    //pass the information from the form to the module service
    this.moduleService.AddModuleInformation(form.value.name,
      form.value.lecturer, form.value.duration, form.value.worthCredits).subscribe(
        ()=>{
          //do something after out operation has finished
        }
      );
    console.log(form.value);
    form.resetForm();
  }
}
