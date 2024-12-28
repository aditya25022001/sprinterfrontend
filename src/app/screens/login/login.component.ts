import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { SharedService } from '../../services/shared-service.service';
import { loginRequest } from '../../state/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../app.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  showPassword:boolean = false
  loading:Boolean = false
  message:String = ""
  success:Boolean = false

  constructor(private store: Store<AppState>, private sharedService:SharedService, private router: Router){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void{
    this.store.select(state => state.login).subscribe({
      next:(data) => {
        if(data.user && data.user.token!==undefined) {
          this.router.navigate(["/"])
        }
      }
    })
  }

  login(): void{
    this.sharedService.loading(true);
    const { email, password } = this.loginForm.value;
    this.store.dispatch(loginRequest({ email, password }))
  }

  toggleShowPassword():void{
    this.showPassword = !this.showPassword
  }

}
