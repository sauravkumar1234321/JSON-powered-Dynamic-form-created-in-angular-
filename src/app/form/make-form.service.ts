import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Field } from '../Field';
import { Form } from '../Form';


@Injectable({
  providedIn: 'root'
})

//MakeFormService has functions which makes the form in a recursive manner
export class MakeFormService {

  constructor() { }

  makeAFormGroup(fields:any){
    let group : any = {};
    var thisObj = this;
    
    //Iterates over each field and recurse when field is a form type object
    fields.forEach(field => {
      //this condition statement is implemented  when there is an array of field(caution: not a form)
      if(Array.isArray(field)){
        field.forEach(f => {
          if(f.isForm){
            console.log("If ran");
            group[f.key] = thisObj.makeAFormGroup(f.fields);
          }
          else{
            console.log("Else ran");
            group[f.key] = f.validations.includes('required') ? 
                                            new FormControl(f.value,Validators.required)
                                            : new FormControl(f.value);
          
        }
      });
      }
      
      else{
        if(field.isForm){
          console.log("If ran");
          group[field.key] = thisObj.makeAFormGroup(field.fields);
        }
        else{
          console.log("Else ran");
          group[field.key] = field.validations.includes('required') ? 
                                          new FormControl(field.value,Validators.required)
                                          : new FormControl(field.value);
        }
      }
      
    });
    //return the form which was made from the json Data
    return new FormGroup(group);
  }

}
