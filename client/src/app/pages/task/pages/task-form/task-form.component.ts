import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {

  protected form: FormGroup;
  protected backIcon = faArrowLeft;


  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
        title: ['', Validators.required],
        description: '',
        deadLine: '',
    })
  }

  protected submit() {
    console.log(this.form.value);
  }

}
