import { Component, OnInit } from '@angular/core';
import { JSONFormService } from './jsonform.service';
import { Field } from './Field';
import { Form } from './Form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'DYNAMIC FORM GENERATOR';
  index : number=0;
  Form : Form;
  toKey = {};
  check : boolean = false;

  constructor(private jsonFormService : JSONFormService){
    
  }
  //cl variaiable is used to decide when will loader start and finish
  cl = false; 
  
  ngOnInit(){
    
  }
  
  //function is used when user requests another type of form
  changeIndex(){
    this.index=1;
    this.postForm();
    //this.GetTheForm();
  }

  changeIndextype2(){
    this.index=2;
    this.postForm();

  }

  //this is used to get the form from the server (Firebase)
  GetTheForm()
  {
    this.getForm();
  }

  //this function runs when user want leave form
  originalIndex(){
    this.index=0;
    this.postForm();
  }

   //this is used to get the form from the server (Firebase)
  getForm(){
    this.cl = true;
    this.check = false;
    this.jsonFormService.getJSONForm().subscribe(
      (data) => {
        console.log(data[this.toKey[this.index]]);
        this.Form = new Form(data[this.toKey[this.index]]);
        this.check = true;
        this.cl = false;
        console.log("Got from the Server");
        
      }
    );
    
  }

  //this is used to post the form to the server (Firebase)
  postForm(){
    this.cl=true;
    this.check = false;
     this.jsonFormService.postJSONForm(this.index)
      .subscribe(
        (responseData) => {
          this.toKey[this.index] = responseData['name'];
          console.log("Posted on the server");
          this.getForm();
        }
      );

  }
  
}


