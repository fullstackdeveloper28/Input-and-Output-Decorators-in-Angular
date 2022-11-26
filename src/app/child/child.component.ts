import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() myInput:string | undefined;
@Output() myOutput:EventEmitter<string>=new EventEmitter();
outputstring="It is child component";
  constructor() { }

  ngOnInit(): void {
    console.log(this.myInput);
  }
  SendData()
  {
    this.myOutput.emit(this.outputstring);
  }
}
