import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {ModuleServiceService} from '../Services/module-service.service';
import {ModulesReadComponent} from '../modules-read/modules-read.component';

@Component({
  selector: 'app-modules-edit',
  templateUrl: './modules-edit.component.html',
  styleUrls: ['./modules-edit.component.css']
})
export class ModulesEditComponent implements OnInit {
  module:any=[];
  constructor(private moduleService:ModuleServiceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.moduleService.GetModule(this.route.snapshot.params['id']).subscribe(
      (data) =>{
          this.module = data;
          console.log("edit module thingy: "+this.module);
      }
    );
  }

  onEditModule(form:NgForm){
    console.log(form.value.name);
    this.moduleService.UpdateModule(this.module._id, form.value.name,
      form.value.lecturer, form.value.duration, form.value.worthCredits).subscribe();
  }
}

