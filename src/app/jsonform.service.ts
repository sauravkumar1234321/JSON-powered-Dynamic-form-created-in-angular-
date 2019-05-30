import { Injectable } from '@angular/core';
import { Form } from './Form';
import { Field } from './Field';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JSONFormService {
  formArray : Form[];
  toIndex = {};
  url = 'https://dynamic-273c9.firebaseio.com/';


  constructor(private http : HttpClient) {
    this.formArray =[new Form({
      label : 'Apply Leave Form',
      style : {'color': 'black'},
      id : 0,
      key : "Form1",
      isFlex : ["fDate","tDate"],
      fields : [
        new Field({
      
          controlType : 'textbox',
          type : 'text',
          key: 'firstName',
          label: 'First Name:',
          value: 'Batman',
          id : 1,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),

         new Field({
      
          controlType : 'textbox',
          type : 'text',
          key: 'lirstName',
          label: 'Last Name:',
          value: 'Batman',
          id : 1,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),
    
        new Field({
          
          controlType : 'dropdown',
          type : 'type',
          key: 'brave',
          label: 'Leave Type',
          value: '',
          id : 2,
          style : {'color': 'black'},
          options : [
            {key: 'Type1',  value: 'Type1'},
            {key: 'Type2',  value: 'Type2'},
            {key: 'Type3',   value: 'Type3'},
            {key: 'Type4', value: 'Type4'}
          ],
          validations:["required"],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),

        
        [new Field({
      
          controlType : 'date',
          type : 'text',
          key: 'fDate',
          label: 'From Date',
          value: "",
          id : 4,
          style : {'color': 'black', 'width': '400px'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),

        new Field({
      
          controlType : 'date',
          type : 'text',
          key: 'tDate',
          label: 'To Date',
          value: "",
          id : 4,
          style : {'color': 'black', 'width': '500px'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        })],
        
        new Field({
      
          controlType : 'textbox',
          type : 'text',
          key: 'Duration',
          label: 'Duration:',
          value: 'Batman',
          id : 1,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),

        new Form({
          label : 'Comments',
          style : {'color': 'black'},
          id : 0,
          key : "form2",
          isFlex: ["invalid"],
          fields : [
              new Field({
      
          controlType : 'textarea',
          type : 'text',
          key: 'Purpose',
          label: 'Purpose:',
          value: "6",
          id : 3,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "Default value",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),
        new Field({
      
          controlType : 'textarea',
          type : 'text',
          key: 'Message',
          label: 'Comments to the Manger:',
          value: "6",
          id : 3,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "Default value",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),

        

           new Field({
      
              controlType : 'month',
              type : 'text',
              key: 'Month',
              label: 'Pick a Month',
              value: "6",
              id : 2,
              style : {'color': 'black'},
              options : "6",
              validations:['required'],
              textAreaValue: "6",
              checkboxOptions: "6",
              multiselectOptons: "6"
            }),new Field({
      
              controlType : 'checkbox',
              type : 'text',
              key: 'Checkbox',
              label: 'Please click it:',
              value: "6",
              id : 1,
              style : {'color': 'black',},
              options : "6",
              validations:['required'],
              textAreaValue: "6",
              checkboxOptions: 'I accept the terms and conditions',
              multiselectOptons: "6"
            }),new Field({
      
              controlType : 'multiselect',
              type : 'text',
              key: 'Multi-Selector-output',
              label: 'Captcha(Prove that you are not a robot): Select any one of these multiselector',
              value: "6",
              id : 1,
              style : {'color': 'black'},
              options : "6",
              validations:['required'],
              textAreaValue: "6",
              checkboxOptions: "6",
              multiselectOptons: ["one","two","three","Four"]
            })]
          
        })
      ]
    }),new Form({
      label : 'Profile Form',
      style : {'color': 'black'},
      id : 0,
      key : "Form1",
      isFlex: ["invalid"],
      fields : [
        new Field({
      
          controlType : 'textbox',
          type : 'text',
          key: 'firstName',
          label: 'First name',
          value: 'Batman',
          id : 1,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),
    
        new Field({
          
          controlType : 'dropdown',
          type : 'type',
          key: 'brave',
          label: 'Bravery Rating',
          value: '',
          id : 2,
          style : {'color': 'black'},
          options : [
            {key: 'solid',  value: 'Solid'},
            {key: 'great',  value: 'Great'},
            {key: 'good',   value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
          ],
          validations:["required"],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),
        new Field({
      
          controlType : 'textarea',
          type : 'text',
          key: 'note',
          label: 'Write a note:',
          value: "6",
          id : 3,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "Default value",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),
        new Field({
      
          controlType : 'date',
          type : 'text',
          key: 'Date',
          label: 'Pick a Date',
          value: "",
          id : 4,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),
        
        new Form({
          label : 'ProfileForm 2',
          style : {'color': 'black'},
          id : 0,
          key : "form2",
          isFlex: ["invalid"],
          fields : [
            new Field({
          
              controlType : 'textbox',
              type : 'text',
              key: 'lastName',
              label: 'Last name',
              value: 'Singh',
              id : 1,
              style : {'color': 'black'},
              options : "6",
              validations:['required'],
              textAreaValue: "6",
              checkboxOptions: "6",
              multiselectOptons: "6"
              
            }),new Field({
      
              controlType : 'month',
              type : 'text',
              key: 'Month',
              label: 'Pick a Month',
              value: "6",
              id : 2,
              style : {'color': 'black'},
              options : "6",
              validations:['required'],
              textAreaValue: "6",
              checkboxOptions: "6",
              multiselectOptons: "6"
            }),new Field({
      
              controlType : 'checkbox',
              type : 'text',
              key: 'Checkbox',
              label: 'Select:',
              value: "6",
              id : 1,
              style : {'color': 'black',},
              options : "6",
              validations:['required'],
              textAreaValue: "6",
              checkboxOptions: 'I am a boy',
              multiselectOptons: "6"
            }),new Field({
      
              controlType : 'multiselect',
              type : 'text',
              key: 'Multi-Selector-output',
              label: 'Select:',
              value: "6",
              id : 1,
              style : {'color': 'black'},
              options : "6",
              validations:['required'],
              textAreaValue: "6",
              checkboxOptions: "6",
              multiselectOptons: ["one","two","three","Four"]
            })]
          
        })
      ]
    }),
    new Form({
      label : 'ProfileForm 3',
      style : {'color': 'black'},
      id : 0,
      key : "form2",
      isFlex: ["invalid"],
      fields : [
        new Field({
      
          controlType : 'textbox',
          type : 'text',
          key: 'lastName',
          label: 'Last name',
          value: 'Singh',
          id : 1,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
          
        }),new Field({
  
          controlType : 'month',
          type : 'text',
          key: 'Month',
          label: 'Pick a Month',
          value: "6",
          id : 2,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: "6"
        }),new Field({
  
          controlType : 'checkbox',
          type : 'text',
          key: 'Checkbox',
          label: 'Select:',
          value: "6",
          id : 1,
          style : {'color': 'black',},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: 'I am a boy',
          multiselectOptons: "6"
        }),new Field({
  
          controlType : 'multiselect',
          type : 'text',
          key: 'Multi-Selector-output',
          label: 'Select:',
          value: "6",
          id : 1,
          style : {'color': 'black'},
          options : "6",
          validations:['required'],
          textAreaValue: "6",
          checkboxOptions: "6",
          multiselectOptons: ["one","two","three","Four"]
        })]
      
    })
      
      
    ];
 
  }
  getJSONForm(){
    return this.http.get(this.url+'post.json');
    
  }

  postJSONForm(index:number){
    return this.http.post(
      this.url+'post.json',this.formArray[index]
    );    
  }
}
