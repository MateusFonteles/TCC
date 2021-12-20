import { PostagemService } from '../postagem.service';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../postagem.model'

@Component({
  selector: 'app-postagem-read',
  templateUrl: './postagem-read.component.html',
  styleUrls: ['./postagem-read.component.css']
})
export class PostagemReadComponent implements OnInit {

  postagens: Postagem[]
  displayedColumns = ['id', 'titulo', 'texto', 'action']

  constructor(private postagemService: PostagemService) { }

  ngOnInit(): void {
    this.postagemService.read().subscribe(postagens => {
      this.postagens = postagens
    })
  }

}
