import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  protected form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private taskService: TaskService
  ) {
    this.form = formBuilder.group({
      id: null,
      done: false,
      title: [null, Validators.required],
      description: null,
      deadLine: null,
      category: null,
    });
    //
    taskService
      .getSelected()
      .pipe(first())
      .subscribe((task) => {
        if (task) this.form.patchValue(task);
      });
  }

  protected onSubmit() {
    const mode = this.form.get('id')!.value ? 'update' : 'create';

    this.taskService[mode](this.form.value)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.router.navigate(['..', 'home']);
        },
      });
  }
}
