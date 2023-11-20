import { Component , OnInit, ViewChild,ElementRef} from '@angular/core';
import { ServiceCubos } from 'src/app/services/serviceCubos';
import { ServiceToken } from 'src/app/services/serviceToken';
import { Cubo } from 'src/app/models/cubo';
import {Router,Params, ActivatedRoute} from "@angular/router" 

@Component({
  selector: 'app-insert-compra',
  templateUrl: './insert-compra.component.html',
  styleUrls: ['./insert-compra.component.css']
})
export class InsertCompraComponent implements OnInit{
  @ViewChild ("selectcubo") selectcuboRef!: ElementRef
  public cubos !: Array<Cubo>
  public token !: string
  constructor(private _ServiceToken :ServiceToken,  private _router : Router, private _activeRoute:ActivatedRoute, private _ServiceCubos:ServiceCubos){}
  ngOnInit(): void {
    this._ServiceCubos.getTodosCubos().subscribe(response=>{
      this.cubos = response
    }) 
    this._activeRoute.params.subscribe((parametros:Params)=>{
    this.token= parametros['token']
    
     console.log(this.token)
    })

  }

  insertcompra():void{
    var idCubo = this.selectcuboRef.nativeElement.value
    this._ServiceToken.postCompra(idCubo,this.token).subscribe(response=>{
      console.log("Insertado" + response)
      this._router.navigate(['/compras/',  this.token ]);

    })
  }
}
