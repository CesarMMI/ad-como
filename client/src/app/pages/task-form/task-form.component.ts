import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  protected form: FormGroup;

  constructor(formBuilder: FormBuilder, private taskService: TaskService) {
    this.form = formBuilder.group({
      id: null,
      done: false,
      title: [null, Validators.required],
      description: null,
      deadLine: null,
      category: null,
    });
  }

  protected onSubmit() {
    this.taskService.create(this.form.value).subscribe((res) => {
      console.log(res);
    });
  }
}
