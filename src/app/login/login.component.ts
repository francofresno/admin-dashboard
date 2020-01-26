import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public rememberMe: boolean = false;

  public auth2: any;

  constructor(
    public router: Router,
    public userService: UserService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';

    if (this.email.length > 1) {
      this.rememberMe = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '23937705621-e1840nhinpdnfocqbvst011i7rtlo06t.apps.googleusercontent.com',
        cookiepolicty: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'));
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this.userService.loginGoogle(token)
        .subscribe(() => window.location.href = '#/dashboard' );
    });
  }

  login(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    let user = new User(null, forma.value.email, forma.value.password);
    this.userService.login(user, forma.value.rememberMe)
      .subscribe(() => this.router.navigate(['/dashboard']));

  }

}