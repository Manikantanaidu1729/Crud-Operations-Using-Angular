import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  // Normal Reactive From Creation

  login = new FormGroup({
    uname : new FormControl(null,[Validators.required,Validators.minLength(6)]),
    email : new FormControl(null,[Validators.required,Validators.email])
  })

  send(){
    console.log(this.login)
  }


  // Form Array

  registrationForm = new FormGroup({
    mobileNumbers : new FormArray(
                                  [
                                    new FormControl("+91",Validators.required),
                                  ]
                                )
  })

  show(){
    console.log(this.registrationForm)
  }

  add(){

    let mobileArray =this.registrationForm.get('mobileNumbers') as FormArray;
    mobileArray.push(
      new FormControl(null,Validators.required)
    )

    // this.registrationForm.controls.mobileNumbers.controls.push(
    //   new FormControl(null,Validators.required)
    // )
  }

  delete(index:number){

    let mobileArray =this.registrationForm.get('mobileNumbers') as FormArray;
    mobileArray.removeAt(index);

    // this.registrationForm.controls.mobileNumbers.controls.splice(index,1);
  }


  // From Builder

  constructor(private fb : FormBuilder){}

  simpleForm = this.fb.group(
                              {
                                uname : [null,[Validators.required]],
                                email : this.fb.control(null,[Validators.required]),
                                mobiles : this.fb.array(
                                  [
                                    ["+91",[Validators.required]],
                                    new FormControl("+91",[Validators.required])
                                  ]
                                ),
                                personal : this.fb.group({
                                  gender : []
                                })
                              }
                            )

  give(){
    console.log(this.simpleForm);
  }
  
  // Custom Validations

  customForm = new FormGroup({
    password : new FormControl(null,[Validators.required,this.upperCase])
  })

  upperCase(control:AbstractControl):ValidationErrors | null{

    let pattern = /[A-Z]/;

    if(pattern.test(control.value)){
      return null;
    }

    return {'noUpper' : true};
  }


  // Async Validations

  form = new FormGroup({
    username : new FormControl(null,[Validators.required],[this.userNameCheck])
  })

  userNameCheck(control:any):Promise<any>{

    const users = ["Manikanta","Ramakrishna","Ramu","Prasad","Gunateja"];

    let information = new Promise((resolve,reject)=>{
      setInterval(()=>{
        if(users.indexOf(control.value) in users){
          resolve({"duplicate":true});
        }
        else{
          resolve(null);
        }
      },3000)
    })

    return information;
  }

  get(){
    console.log(this.form)
  }

}