import { Router, ActivatedRoute } from '@angular/router';
import { Postagem } from './../../components/postagem/postagem.model';
import { PostagemService } from 'src/app/components/postagem/postagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {

  postagem: Postagem

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit( ): void {
  const id = +this.route.snapshot.paramMap.get('id')
  this.postagemService.readById(id).subscribe(postagem =>{
    this.postagem = postagem
  }   )

}
  navigateToArtigos(): void {
    this.router.navigate(['/artigos'])
  }
  
}