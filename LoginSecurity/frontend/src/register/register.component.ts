import { User } from './../domain/user';
import { AlertService } from './../services/alertservice';
import { UserService } from './../services/userservice';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                    this.alertService.success('Registration successful');
                    console.log('fruitcake');
                },
                error => {
                    this.loading = false;
                    this.alertService.error('Registration failed');
                });
    }
}
