import { Component, OnInit,Input } from '@angular/core';
import { MakeFormService } from './make-form.service';
import { FormGroup } from '@angular/forms';
import { Field } from '../Field';
import { Form } from '../Form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

//uses the make-form service to make a dynamic form
export class DynamicFormComponent implements OnInit {
  

  @Input() Form : Form;
  form : FormGroup;
  payLoad = '';

  constructor(private makeFormService : MakeFormService) { }

  ngOnInit() {
    //makes the form
    this.form = this.makeFormService.makeAFormGroup(this.Form.fields);
    this.form.reset();
  }

  onSubmit() {
    //onsubmit saves the value filled up in the form
    this.payLoad = JSON.stringify(this.form.value);
    this.cancel = true;
    this.undoFlag = false;
  }

  cancel = false;
  //removes the form on clicking cancel
  onClickCancel(){

    this.cancel = true;
  }
  //checks if the field is an array of field or not(caution : not form)
  isValidArray(x){
    return Array.isArray(x);
  }

  //reset the form when the user clicks reset
  onClickReset(){
    this.form = this.makeFormService.makeAFormGroup(this.Form.fields);
    this.cancel = false;
  }
   undoFlag = false;
  onClickUndo(){
    this.cancel = false;
    this.undoFlag = true;
  }
}
