import { PostagemService } from '../postagem.service';
import { Postagem } from '../postagem.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-product-create',
  templateUrl: './postagem-create.component.html',
  styleUrls: ['./postagem-create.component.css']
})
export class PostagemCreateComponent implements OnInit {
 
 postagem: Postagem = {
   titulo: '',
   texto: '',
   autor: '',
   descricao:''
 }


  constructor(private postagemService: PostagemService, 
    private router: Router) { }
 
  ngOnInit(): void {
  }

  criarPostagem(): void{
    this.postagemService.create(this.postagem).subscribe(() => {
      this.postagemService.showMessage('Postagem criada!')
      this.router.navigate(['/postagens'])
    })
    }
  
  cancelar(): void{
    this.router.navigate(['/postagens'])
  }
  
}
