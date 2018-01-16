import { AlertService } from './../services/alertservice';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authenticationservice';
import { Router, ActivatedRoute } from '@angular/router';
import { MatProgressBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService
      ) { }

  ngOnInit() {
      this.authenticationService.logout();
  }

  login() {
      this.loading = true;
      console.log(this.model.password);
      this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
              data => {
                  this.router.navigate(['/admin']);
                  console.log(data);
              },
              error => {
                  this.loading = false;
                  this.alertService.error('Wrong password and/or username');
                  console.log('KORV' + error);
              });
  }

}
