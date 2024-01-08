import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.css']
})
export class FoglalasokComponent {
  foglalasok:any

  oszlopok=[
    {key:"id", text:"Id"},
    {key:"cim", text:"Cím"},
    {key:"datum", text:"Dátum"},
    {key:"fo", text:"Fő"},
    {key:"iranyitoszam", text:"Irányítószám"},
    {key:"nev", text:"Név"},
  ]
  constructor(private base:BaseService){
    this.base.getData('foglalasok').subscribe(
      (adatok)=>this.foglalasok=adatok
    )
    
  }
}
