import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  protected tasks$?: Observable<ITask[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.get();
  }

  onDelete(task: ITask) {
    this.taskService.delete(task.id).subscribe((res) => {
      console.log(res);
    });
  }
}
