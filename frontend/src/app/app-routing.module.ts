import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { PostagemUpdateComponent } from './components/postagem/postagem-update/postagem-update.component';
import { PostagemDeleteComponent } from './components/postagem/postagem-delete/postagem-delete.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './views/home/home.component';
import {ProductCrudComponent} from './views/product-crud/product-crud.component';
import { PostagemCreateComponent } from './components/postagem/postagem-create/postagem-create.component';  
import { from } from 'rxjs';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},{
path: "postagens",
component: ProductCrudComponent
}, {
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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }