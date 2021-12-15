import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { PostagemUpdateComponent } from './components/postagem/postagem-update/postagem-update.component';
import { PostagemDeleteComponent } from './components/postagem/postagem-delete/postagem-delete.component';
import { HomeAdmComponent } from './views/home-adm/home-adm.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import { PostagemCreateComponent } from './components/postagem/postagem-create/postagem-create.component';  
import { ContatoComponent } from './views/contato/contato.component';
import { from } from 'rxjs';
import { SobreComponent } from './views/sobre/sobre.component';
import { AtividadesComponent } from './views/atividades/atividades.component';
import { ArtigosComponent } from './views/artigos/artigos.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},{
path: "postagens",
component: ProductCrudComponent
},{
path: "administracao",
component: HomeAdmComponent
},{
  path: "postagens/create",
  component: PostagemCreateComponent
}, {
  path: "postagens/update/:id",
  component: PostagemUpdateComponent
}, {
  path: "postagens/delete/:id",
  component: PostagemDeleteComponent
}, {
  path: "usuarios",
  component: UsuarioCrudComponent
}, {
  path: "usuarios/create",
  component: UsuarioCreateComponent
}, {
  path: "usuarios/update/:id",
  component: UsuarioUpdateComponent
}, {
  path: "usuarios/delete/:id",
  component: UsuarioDeleteComponent
},{
  path: "painel",
  component: HomeAdmComponent
},{
  path: "login",
  component: LoginComponent
},{
  path: "contato",
  component: ContatoComponent
},{
  path: "sobre",
  component: SobreComponent
},{
  path: "atividades",
  component: AtividadesComponent
},{
  path: "artigos",
  component: ArtigosComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }