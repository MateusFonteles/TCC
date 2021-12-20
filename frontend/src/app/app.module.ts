// ./
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//views
import { HomeComponent } from './views/home/home.component';
import { HomeAdmComponent } from './views/home-adm/home-adm.component';

//components
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PostagemCreateComponent } from './components/postagem/postagem-create/postagem-create.component';
import { PostagemDeleteComponent } from './components/postagem/postagem-delete/postagem-delete.component';
import { PostagemReadComponent } from './components/postagem/postagem-read/postagem-read.component';
import { PostagemUpdateComponent } from './components/postagem/postagem-update/postagem-update.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { LoginComponent } from './views/login/login.component';
import { ContatoComponent } from './views/contato/contato.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { AtividadesComponent } from './views/atividades/atividades.component';
import { ArtigosComponent } from './views/artigos/artigos.component';
import { AtividadeCreateComponent } from './components/atividade/atividade-create/atividade-create.component';
import { CategoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';
import { AtividadeReadComponent } from './components/atividade/atividade-read/atividade-read.component';
import { AtividadeDeleteComponent } from './components/atividade/atividade-delete/atividade-delete.component';
import { AtividadeUpdateComponent } from './components/atividade/atividade-update/atividade-update.component';
import { SerieCreateComponent } from './components/serie/serie-create/serie-create.component';
import { SerieDeleteComponent } from './components/serie/serie-delete/serie-delete.component';
import { SerieUpdateComponent } from './components/serie/serie-update/serie-update.component';
import { SerieReadComponent } from './components/serie/serie-read/serie-read.component';
import { CategoriaCrudComponent } from './views/crud/categoria-crud/categoria-crud.component';
import { AtividadeCrudComponent } from './views/crud/atividade-crud/atividade-crud.component';
import { UsuarioCrudComponent } from './views/crud/usuario-crud/usuario-crud.component';
import { PostagemCrudComponent } from './views/crud/postagem-crud/postagem-crud.component';
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
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PostagemCrudComponent,
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
    AtividadeCreateComponent,
    AtividadeCrudComponent,
    CategoriaCreateComponent,
    CategoriaCrudComponent,
    CategoriaDeleteComponent,
    CategoriaReadComponent,
    CategoriaUpdateComponent,
    AtividadeReadComponent,
    AtividadeDeleteComponent,
    AtividadeUpdateComponent,
    SerieCreateComponent,
    SerieDeleteComponent,
    SerieUpdateComponent,
    SerieReadComponent,
    
   
    
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
    MatGridListModule,
    MatChipsModule,
    MatSelectModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }