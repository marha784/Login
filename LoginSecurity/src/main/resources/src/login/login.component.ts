import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authenticationservice';
import { Router, ActivatedRoute } from '@angular/router';


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
                  this.router.navigate(['/register']);
              },
              error => {
                  this.loading = false;
              });
  }

}
