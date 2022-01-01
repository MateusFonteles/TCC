import { CategoriaService } from './../categoria.service';
import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }
 
 
   constructor(private categoriaService: CategoriaService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarCategoria(): void{
     this.categoriaService.create(this.categoria).subscribe(() => {
       this.categoriaService.showMessage('Categoria criada!')
       this.router.navigate(['/categorias'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/categorias'])
   }
   
 }
 