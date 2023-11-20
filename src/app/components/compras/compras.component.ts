import { Component , OnInit} from '@angular/core';
import { ServiceToken } from 'src/app/services/serviceToken';
import {Router,Params, ActivatedRoute} from "@angular/router" 
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit{

  public compra !: Array<Compra>
  public token!: string

  constructor(private _ServiceToken :ServiceToken,  private _activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      this.token = parametros['token']
      console.log(this.token)
     })

     if(this.token){
      this._ServiceToken.getCompraUer(this.token).subscribe(response=>{
        this.compra= response
        console.log(this.compra)
      })
    }
  }
}
