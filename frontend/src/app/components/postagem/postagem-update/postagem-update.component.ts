import { PostagemService } from '../postagem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Postagem } from '../postagem.model';

@Component({
  selector: 'app-postagem-update',
  templateUrl: './postagem-update.component.html',
  styleUrls: ['./postagem-update.component.css']
})
export class PostagemUpdateComponent implements OnInit {

  postagem: Postagem

  constructor(
    private postagemService: PostagemService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.postagemService.readById(id).subscribe(postagem => {
      this.postagem = postagem
    });
  }

  updateProduct(): void {
    this.postagemService.update(this.postagem).subscribe(() => {
      this.postagemService.showMessage('Postagem atualizada com sucesso!')
      this.router.navigate(["/postagens"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/postagens']);
  }

}
