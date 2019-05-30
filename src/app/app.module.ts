import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './form/form.component';
import { DynamicFormHelperComponent } from './form/form-maker/form-maker.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormHelperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
