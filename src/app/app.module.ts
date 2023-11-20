import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing,appRoutingProvider } from './app.routing';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceToken } from './services/serviceToken';

import { ServiceCubos } from './services/serviceCubos';
import { MarcascuboComponent } from './components/marcascubo/marcascubo.component';
import { ValoracioncomponentComponent } from './components/valoracioncomponent/valoracioncomponent.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { __importStar } from 'tslib';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MarcascuboComponent,
    ValoracioncomponentComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule,HttpClientModule
  ],
  providers: [appRoutingProvider,ServiceCubos,ServiceToken],
  bootstrap: [AppComponent]
})
export class AppModule { }
