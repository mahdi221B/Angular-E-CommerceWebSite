import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitForm(form: NgForm) {
    if (form.valid) {
      // How data shouild be pcessed
    }
  }
}