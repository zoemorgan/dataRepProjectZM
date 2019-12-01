import { Component, OnInit } from '@angular/core';
import { ModuleServiceService } from '../Services/module-service.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modules-read',
  templateUrl: './modules-read.component.html',
  styleUrls: ['./modules-read.component.css']
})
export class ModulesReadComponent implements OnInit {
  MyModules: any = [];
  constructor(private moduleService: ModuleServiceService) { }

  ngOnInit() {
    //get all information from the database through the module service and store it in the MyModules variable
    this.moduleService.GetModuleInformation().subscribe((data) => {
      this.MyModules = data.modules;
      console.log(this.MyModules);
    })
  }

  onDelete(id:String){
    console.log("Deleting movie with id: "+id);
    //pass the id of the selected module to the module service delete function where it
    // will be removed from the db, page is reloaded once the module is deleted
    this.moduleService.DeleteModule(id).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );
  }
}
