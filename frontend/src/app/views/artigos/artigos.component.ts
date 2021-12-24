import { Postagem } from './../../components/postagem/postagem.model';
import { PostagemService } from 'src/app/components/postagem/postagem.service';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';

@Component({
  selector: 'app-artigos',
  templateUrl: './artigos.component.html',
  styleUrls: ['./artigos.component.css']
})
export class ArtigosComponent implements OnInit {

  postagens: Postagem[]

  constructor(
    private postagemService: PostagemService, 
    private headerService : HeaderService) {
      headerService.headerData = {
        title: 'Artigos',
        icon: 'school',
        routeUrl: '/artigos'
     }
    }

  ngOnInit(): void {
    this.postagemService.read().subscribe(postagens => {
      this.postagens = postagens
    })
  }
}
