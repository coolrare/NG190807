import { Component, OnInit } from '@angular/core';
import { chartPieDemo } from '../chartPieDemo';
import { chartAreaDemo } from '../chartAreaDemo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    chartAreaDemo();
    chartPieDemo();
  }

  goButtons(type) {
    this.router.navigateByUrl('/components/buttons/' + type);
  }

  goCards(num) {
    this.router.navigate(['/components/cards'], {
      queryParams: {
        key: num
      }
    });
  }

}
