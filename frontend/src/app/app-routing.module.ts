//Atividade
import { AtividadeCrudComponent } from './views/crud/atividade-crud/atividade-crud.component';
import { AtividadesComponent } from './views/atividades/atividades.component';
import { AtividadeCreateComponent } from './components/atividade/atividade-create/atividade-create.component';
import { AtividadeReadComponent } from './components/atividade/atividade-read/atividade-read.component';
import { AtividadeDeleteComponent } from './components/atividade/atividade-delete/atividade-delete.component';
import { AtividadeUpdateComponent } from './components/atividade/atividade-update/atividade-update.component';

//USUARIO
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioCrudComponent } from './views/crud/usuario-crud/usuario-crud.component';

//POSTAGEM
import { PostagemUpdateComponent } from './components/postagem/postagem-update/postagem-update.component';
import { PostagemDeleteComponent } from './components/postagem/postagem-delete/postagem-delete.component';
import { PostagemCrudComponent } from './views/crud/postagem-crud/postagem-crud.component';
import { PostagemCreateComponent } from './components/postagem/postagem-create/postagem-create.component';  

//CATEGORIA
import { CategoriaCrudComponent } from './views/crud/categoria-crud/categoria-crud.component';
import { CategoriaCreateComponent } from './components/categoria/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './components/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './components/categoria/categoria-delete/categoria-delete.component';

//OUTROS
import { HomeAdmComponent } from './views/home-adm/home-adm.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent} from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { ArtigosComponent } from './views/artigos/artigos.component';

//MÓDULOS
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SerieCrudComponent } from './views/crud/serie-crud/serie-crud.component';
import { SerieCreateComponent } from './components/serie/serie-create/serie-create.component';
import { SerieUpdateComponent } from './components/serie/serie-update/serie-update.component';
import { SerieDeleteComponent } from './components/serie/serie-delete/serie-delete.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},{
  path: "postagens",
  component: PostagemCrudComponent
},{
  path: "postagens/create",
  component: PostagemCreateComponent
},{
  path: "postagens/delete/:id",
  component: PostagemDeleteComponent
}, {
  path: "postagens/update/:id",
  component: PostagemUpdateComponent
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
}, {
  path: "atividades/create",
  component: AtividadeCreateComponent
},{
  path: "atividades/crud",
  component: AtividadeCrudComponent
},{
  path: "atividades",
  component: AtividadesComponent
},{
  path: "atividades/update/:id",
  component: AtividadeUpdateComponent
},{
  path: "atividades/read",
  component: AtividadeReadComponent
},{
  path: "atividades/delete/:id",
  component: AtividadeDeleteComponent
},{
  path: "categorias/crud",
  component: CategoriaCrudComponent
},{
  path: "categorias/create",
  component: CategoriaCreateComponent
},{
  path: "categorias/update/:id",
  component: CategoriaUpdateComponent
},{
  path: "categorias/delete/:id",
  component: CategoriaDeleteComponent
},{
  path: "series/crud",
  component: SerieCrudComponent
},{
  path: "series/create",
  component: SerieCreateComponent
},{
  path: "series/update/:id",
  component: SerieUpdateComponent
},{
  path: "series/delete/:id",
  component: SerieDeleteComponent
},{
  path: "artigos",
  component: ArtigosComponent
},{
  path: "administracao",
  component: HomeAdmComponent
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
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }