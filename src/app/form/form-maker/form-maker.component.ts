import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../Field';
import { Form } from '../../Form';


@Component({
  selector: 'app-form-maker',
  templateUrl: './form-maker.component.html',
  styleUrls: ['./form-maker.component.css']
})
export class DynamicFormHelperComponent implements OnInit {
  @Input() field : any;
  @Input() form : FormGroup;

  constructor() { } 

  ngOnInit() {
  }

  //tell if the field of the form is filled or not
  get isValid() { 
    
    return (this.form.controls[this.field.key].valid); 
  } 
  
}
