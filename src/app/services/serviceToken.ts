import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";     
import { Usuario } from "../models/usuario";

@Injectable()
export class ServiceToken {
    constructor(private _http: HttpClient){}

    postLogin(usuario: Usuario):Observable<any>{
        var json = JSON.stringify(usuario)

        var request = "api/Manage/Login"
        var url = environment.urlexamen + request

        var header = new HttpHeaders().set("Content-type", "application/json");
        return  this._http.post(url,json,{headers:header})
    }

    getUsuario(token:any):Observable<any>{
        var request = "api/Manage/PerfilUsuario"
        var url = environment.urlexamen + request
        var header = new HttpHeaders().set('Authorization', 'bearer ' +token);
        return  this._http.get(url, {headers: header})
    }

    getCompraUer(token:any):Observable<any>{
        var request = "api/Compra/ComprasUsuario"
        var url = environment.urlexamen + request
        var header = new HttpHeaders().set('Authorization', 'bearer ' +token);
        return  this._http.get(url, {headers: header})
    }

    postCompra(id: any, token: any): Observable<any> {
        var request = "api/Compra/InsertarPedido/" + id;
        var url = environment.urlexamen + request;
      
        var headers = new HttpHeaders()
          .set("Content-type", "application/json")
          .set('Authorization', 'bearer ' + token);
      
        return this._http.post(url, null, { headers: headers });
      }
      
}