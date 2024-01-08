import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-ujfoglalas',
  templateUrl: './ujfoglalas.component.html',
  styleUrls: ['./ujfoglalas.component.css']
})
export class UjfoglalasComponent {
foglalas:any={}
foglalasok:any

constructor(private base:BaseService, private router:Router){
  this.base.getData('foglalasok').subscribe(
    (adatok)=>this.foglalasok=adatok
  )
}

kuldApi(){
  this.base.addData(this.foglalas).subscribe(
  {
    next:()=> this.router.navigate(['/foglalasok']),
    error:(e)=>console.log(e)
  }
  )
  window.location.reload
}
}
