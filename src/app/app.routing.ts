import { Routes,RouterModule } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./components/home/home.component"
import { MarcascuboComponent } from "./components/marcascubo/marcascubo.component";
import { ValoracioncomponentComponent } from "./components/valoracioncomponent/valoracioncomponent.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { ComprasComponent } from "./components/compras/compras.component";

const appRoutes : Routes  =[
    {path : "", component: HomeComponent},
    {path : "marcascubo/:marca", component: MarcascuboComponent},
    {path : "valoracion/:id", component: ValoracioncomponentComponent},
    {path : "login", component: LoginComponent},
    {path : "register", component: RegistroComponent},
    {path : "perfil/:token", component: PerfilComponent},
    {path : "compras/:token", component: ComprasComponent},

]


export const appRoutingProvider : any[] = [];
export const routing : ModuleWithProviders<any>= RouterModule.forRoot(appRoutes)