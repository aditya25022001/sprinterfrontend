import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { User } from '../../model/login';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { logout } from '../../state/login';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  loggedIn: boolean;
  user!: User | undefined;

  constructor(private store: Store<AppState>, private router: Router){
    this.loggedIn = false
  }

  ngOnInit(): void{
    this.store.select(state => state.login).subscribe({
      next:(res) => {
        if(res.user && res.user.token){
          this.loggedIn = true;
          this.user = res.user;
        }
      }
    })
  }

  logout(){
    this.store.dispatch(logout());
    location.reload();
  }

}
