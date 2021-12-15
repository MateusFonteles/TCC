import { Postagem } from './../../components/postagem/postagem.model';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/components/usuario/usuario.model';
import { UsuarioService } from 'src/app/components/usuario/usuario.service';
import { PostagemService } from 'src/app/components/postagem/postagem.service';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  postagens: Postagem[] 

  constructor(private postagemService: PostagemService) { }

  ngOnInit(): void {
    this.postagemService.read().subscribe(postagens => {
      this.postagens = postagens
    })
  }

}
