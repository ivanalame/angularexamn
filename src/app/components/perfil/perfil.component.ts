import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioInfo } from 'src/app/models/usuarioinfo';
import { ServiceToken } from 'src/app/services/serviceToken';
import {Router,Params, ActivatedRoute} from "@angular/router" 


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public usuario !: UsuarioInfo
  public token!: string
  constructor(private _ServiceToken :ServiceToken,  private _activeRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
     this.token = parametros['token']
     console.log(this.token)
    })

    if(this.token){
      this._ServiceToken.getUsuario(this.token).subscribe(response=>{
        this.usuario= response
        console.log(this.usuario)
      })
    }
  }
}
