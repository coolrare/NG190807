import { Component, OnInit } from '@angular/core';
import { chartPieDemo } from '../chartPieDemo';
import { chartAreaDemo } from '../chartAreaDemo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    chartAreaDemo();
    chartPieDemo();
  }

}
