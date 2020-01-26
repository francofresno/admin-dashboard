import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  swal from 'sweetalert2';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public userService: UserService,
    public router: Router
  ) { }

  areEquals(field1: string, field2: string) {

    return (group: FormGroup) => {

      let pass1 = group.controls[field1].value;
      let pass2 = group.controls[field2].value;

      if (pass1 === pass2) {
        return null;
      }
      return {
        areEquals: true
      };

    };
  }

  ngOnInit() {
    init_plugins()

    this.forma = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      conditions: new FormControl(false),
    }, { validators: this.areEquals('password', 'password2') });

    this.forma.setValue({
      name: 'Test ',
      email: 'test@test.com',
      password: '123456',
      password2: '123456',
      conditions: true
    });
  }

  registerUser() {

    if (this.forma.invalid) {
      return;
    }

    if (!this.forma.value.conditions) {
      swal('Importante', 'Debe aceptar las condiciones', 'warning');
      return;
    }

    let user = new User(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.password
    );

    this.userService.createUser(user)
      .subscribe( resp => this.router.navigate(['/login']));
  }

}
