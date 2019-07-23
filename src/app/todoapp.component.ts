import { Component, Input, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'todo',
  template: `<p> {{ task }} </p>  <button (click)="triggerdetechChange()"> detectChanges </button> <button (click)="triggermarkforcheck()"> markForCheck </button> <br>`,
})
export class TodoComponent {
  @Input() task: string;

  constructor(private cd: ChangeDetectorRef) { }
  triggerdetechChange() {
    //2. Explicitly calling the detectChanges
    this.task = this.task + " detechChange";
    this.cd.detectChanges();
  }

  triggermarkforcheck() {
    //2. Explicitly calling the markForCheck
    this.task = this.task + " markForCheck";
    this.cd.markForCheck();
  }
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
  template: `<todo-list [todolist] = "todolist"></todo-list> <br> <button (click)="updatetodolist()"> Change Input Ref </button>`,
})
export class TodoAppComponent implements OnInit {
  @Input() todolist = [{ id: "1", task: "Task 1" }, { id: "2", task: "Task 2" }, { id: "3", task: "Task 3" }];

  ngOnInit() {
    // OnPush Well not do the CD.
    // setTimeout(() => {this.todolist[0].task = "Jagan"; console.log("update using setTimeout")}, 0);
    // setInterval(() => {this.todolist[0].task = "Jagan"; console.log("update using setInterval") }, 10000);
    // Promise.resolve().then(() => {this.todolist[0].task = "Jagan"; console.log("update using Promise") });
  }

  //2. Dom Events.
  updatetodolist() {
    //1. Changing the Input reference.    
    this.todolist = [{ id: "1", task: "Task 4" }, { id: "2", task: "Task 5" }, { id: "3", task: "Task 6" }];
  }

}
