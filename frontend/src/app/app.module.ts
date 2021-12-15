// ./
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//views
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { HomeAdmComponent } from './views/home-adm/home-adm.component';
 
//components
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PostagemCreateComponent } from './components/postagem/postagem-create/postagem-create.component';
import { PostagemDeleteComponent } from './components/postagem/postagem-delete/postagem-delete.component';
import { PostagemReadComponent } from './components/postagem/postagem-read/postagem-read.component';
import { PostagemUpdateComponent } from './components/postagem/postagem-update/postagem-update.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { LoginComponent } from './views/login/login.component';
import { ContatoComponent } from './views/contato/contato.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { AtividadesComponent } from './views/atividades/atividades.component';
import { ArtigosComponent } from './views/artigos/artigos.component';

//@angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt);


 
//@angular/material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
  import { from } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import { AtividadeComponent } from './atividade/atividade.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    PostagemCreateComponent,
    PostagemDeleteComponent,
    PostagemReadComponent,
    PostagemUpdateComponent,
    UsuarioCrudComponent,
    UsuarioCreateComponent,
    UsuarioDeleteComponent,
    UsuarioReadComponent,
    UsuarioUpdateComponent,
    HomeAdmComponent,
    LoginComponent,
    ContatoComponent,
    SobreComponent,
    AtividadesComponent,
    ArtigosComponent,
    AtividadeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }