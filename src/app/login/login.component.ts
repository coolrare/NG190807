import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;

  data: any = {
    email: '',
    pwd: '',
    rememberMe: true
  };

  constructor(private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    document.body.className = 'bg-gradient-primary';

    this.form = this.fb.group({
      email: '',
      pwd: '',
      rememberMe: true
    });
  }

  ngOnDestroy(): void {
    document.body.className = '';
  }

  doLogin(form: NgForm) {
    if (form.valid) {
      localStorage.setItem('token', '123');
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigateByUrl(returnUrl);
    }
  }

}
