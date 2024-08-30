import { AfterViewChecked, Component, DoCheck, ViewChild } from '@angular/core';
import { RoutingComponent } from './routing/routing.component';
import { SbarroComponent } from './sbarro/sbarro.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { InputDecoratorPToCComponent } from './input-decorator-p-to-c/input-decorator-p-to-c.component';
import { OutputDecoratorCToPComponent } from './output-decorator-c-to-p/output-decorator-c-to-p.component';
import { TemplateRefVariableCToPComponent } from './template-ref-variable-c-to-p/template-ref-variable-c-to-p.component';
import { ViewchildDecoratorCToPComponent } from './viewchild-decorator-c-to-p/viewchild-decorator-c-to-p.component';
import { FormsModule } from '@angular/forms';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { NgOnInitComponent } from './ng-on-init/ng-on-init.component';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';
import { NgViewInitViewCheckedComponent } from './ng-view-init-view-checked/ng-view-init-view-checked.component';
import { NgContentInitContentCheckedComponent } from './ng-content-init-content-checked/ng-content-init-content-checked.component';
import { NgDestroyComponent } from './ng-destroy/ng-destroy.component';
import { DomManipulationComponent } from './dom-manipulation/dom-manipulation.component';
import { ViewchildViewchildrenComponent } from './viewchild-viewchildren/viewchild-viewchildren.component';
import { HttpServiceComponent } from './http-service/http-service.component';
import { Router, RouterModule } from '@angular/router';
import { CrudOperationsComponent } from './crud-operations/crud-operations.component';
import { ObservableComponent } from './observable/observable.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { GreetComponent } from '../anotherModule/greet/greet.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoutingComponent,SbarroComponent,TemplateDrivenFormComponent,DataBindingComponent,DirectivesComponent,
            PipesComponent,TemplateReferenceVariableComponent,InputDecoratorPToCComponent,OutputDecoratorCToPComponent,
            TemplateRefVariableCToPComponent,ViewchildDecoratorCToPComponent,FormsModule,NgOnChangesComponent,NgOnInitComponent,
            NgDoCheckComponent,NgViewInitViewCheckedComponent,NgContentInitContentCheckedComponent,NgDestroyComponent,
            DomManipulationComponent,ViewchildViewchildrenComponent,HttpServiceComponent,
            RouterModule,CrudOperationsComponent,ObservableComponent,NgContentComponent,GreetComponent,ReactiveFormsComponent,
            AsyncPipeComponent
           ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements DoCheck,AfterViewChecked{

  constructor(private r: Router){}

  data:string="parent variable";

  array:any=[23,3,23,23,3,23];

  getting_data:string | undefined;

  // this is for docheck
  mobile = "";
  mlist = ["oppo","redmi","samsung","iqoo"];
  ngDoCheck(): void {
    console.log("Parent doCheck called");
  }
  addMobile(){
    this.mlist.push(this.mobile);
    this.mobile="";
  }


  // this is for ngcontentinit and checked
  i:number=0;
  increment(){
    this.i+=1
  }
  ngAfterViewChecked(): void {
    console.log("parent ngAfterViewChecked called")
  }

 
  // ViewChild
  @ViewChild(ViewchildDecoratorCToPComponent) child:any;
  test(){
    console.log(this.child.passtoParent());
  }


  navigate(){
    this.r.navigate(["sbarro"]);
  }
}