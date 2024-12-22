import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router:Router, private store: Store<AppState>){}
  ngOnInit(): void{
    this.store.select(state => state.login).subscribe({
      next:(data) => {
        if(!data.user || !data.user.token){
          this.router.navigate(["login"]);
        }
      }
    })
  }
}
