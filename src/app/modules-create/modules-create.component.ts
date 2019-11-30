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
    
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);

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
