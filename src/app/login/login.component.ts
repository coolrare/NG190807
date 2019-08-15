import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      accounts: this.fb.array([
        this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          pwd: ['', [Validators.required, Validators.minLength(6)]],
        }),
        this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          pwd: ['', [Validators.required, Validators.minLength(6)]],
        })
      ]),
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
