import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';
import { error, getToast } from '../../state/shared';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {

  toast:Observable<{ isError:boolean, message?:string, color?:string }>
  class: string = ""
  classConstant: string = "alert alert-dismissible fade show"

  constructor(private store:Store<AppState>){
    this.toast = this.store.select(getToast);
    this.toast.subscribe({
      next:(value) => {
        if(value.color!==""){
          this.class = ""
          this.class="alert-"+value.color+" "+this.classConstant
        }
      }
    })
  }

  ngOnInit():void{
    this.toast = this.store.select(getToast)
    this.toast.subscribe((data) => {
      if(data.isError)
        setTimeout(()=>{
          this.store.dispatch(error({ isError:false, message:"", color:"" }));
        },2500)
    })
  }
}
