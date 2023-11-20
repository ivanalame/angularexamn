import { Component, ViewChild, ElementRef } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ServiceToken } from 'src/app/services/serviceToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild ("cajanombre") selectUsuarioRef!: ElementRef
  @ViewChild ("cajapassword") selectpasswordRef!: ElementRef
  public token !: string
  public usuario !: Usuario
  
  constructor(private _ServiceToken:ServiceToken){}

  postLogin():void{
    var email = this.selectUsuarioRef.nativeElement.value
    var password = this.selectpasswordRef.nativeElement.value
    console.log(email, password)
    this.usuario = new Usuario(email,password)
    console.log(this.usuario)

    this._ServiceToken.postLogin(this.usuario).subscribe(response=>{
      this.token =response.response
      console.log(this.token)
    })
  }
}
