import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, map, Observable } from 'rxjs';
import { ITask } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected tasks$: Observable<{ 0: ITask[]; 1: ITask[]; 2: ITask[] }> =
    this.taskService.get().pipe(
      map((tasks) =>
        tasks.reduce(function (r, a) {
          r[a.state] = r[a.state] || [];
          r[a.state].push(a);
          return r;
        }, Object.create({0: [], 1: [], 2: []}))
      )
    );

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {}

  protected onDelete(task: ITask) {
    this.taskService.delete(task.id).pipe(first()).subscribe();
  }

  protected onEdit(task: ITask) {
    this.taskService.select(task);
    this.router.navigate(['..', 'edit']);
  }

  protected onAdd() {
    this.taskService.select();
    this.router.navigate(['..', 'add']);
  }

  private handleDrag(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  protected onDrag(event: CdkDragDrop<ITask[]>) {
    this.handleDrag(event)
    const task = event.container.data[event.currentIndex];
    task.state = parseInt(event.container.id.slice(-1));
    this.taskService.update(task, false).subscribe({
      next: res => console.log(res)
    })
  }
}
