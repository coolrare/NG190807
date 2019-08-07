import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  key = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((param) => {
      this.key = param.get('key');
    });
  }

  inc() {
    this.router.navigate(['../cards'], {
      relativeTo: this.route,
      queryParams: { key: (+this.key) + 1 }
    });
  }

}
