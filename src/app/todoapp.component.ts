import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'todo',
  template: `<p> {{ task }} </p> <br>`,
})
export class TodoComponent {
  @Input() task: string;
}

@Component({
  selector: 'todo-list',
  template: `<todo *ngFor="let todoobj of todolist" [task]="todoobj.task"></todo>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Input() todolist;
}

@Component({
  selector: 'todo-app',
  template: `<todo-list [todolist] = "todolist"></todo-list> <button (click)="updatetodolist()"> Refresh </button>`,
})
export class TodoAppComponent {
  @Input() todolist = [{ id: "1", task: "Task 1" }, { id: "2", task: "Task 2" }, { id: "3", task: "Task 3" }];

  updatetodolist() {
    this.todolist[0].task = "Jagan"; //= [ { id: "1", task: "Task 1"}, { id: "2", task: "Task 2"}, { id: "3", task: "Task 3"}];
    // setTimeout(() => this.todolist[0].task = "Jagan", 0);

    // setInterval(() => this.todolist[0].task = "Jagan", 100);

    //Promise.resolve().then(() => this.todolist[0].task = "Jagan");

  }
}
