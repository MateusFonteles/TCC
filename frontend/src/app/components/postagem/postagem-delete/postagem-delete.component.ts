import { ActivatedRoute, Router } from '@angular/router';
import { PostagemService } from '../postagem.service';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../postagem.model';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem

  constructor(
    private postagemService: PostagemService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postagemService.readById(id).subscribe(postagem => {
      this.postagem = postagem
    })
  }

  deletarPostagem() {
    this.postagemService.delete(this.postagem.id).subscribe(() => {
      this.postagemService.showMessage('Produto excuído com sucesso')
      this.router.navigate(['/postagens'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/postagens'])
  }

}
