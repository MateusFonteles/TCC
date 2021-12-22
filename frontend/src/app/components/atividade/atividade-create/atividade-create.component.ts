import { Categoria } from './../../categoria/categoria.model';
import { AtividadeService } from './../atividade.service';
import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade.model';
import { Router } from '@angular/router';
import { CategoriaService } from '../../categoria/categoria.service';
import { Serie } from '../../serie/serie.model';
import { SerieService } from '../../serie/serie.service';

@Component({
  selector: 'app-atividade-create',
  templateUrl: './atividade-create.component.html',
  styleUrls: ['./atividade-create.component.css']
})
export class AtividadeCreateComponent implements OnInit {
  
  materiaSelecionada : Categoria

  serieSelecionada: Serie

  categorias: Categoria[]
  
  series: Serie[]

 atividade: Atividade = {
  id: 0,
  titulo:'',
  serie: null,
  materia: null,
  imagem: '',
  descricao: '',
  autor:''
 }
 
   constructor(private atividadeService: AtividadeService, 
     private router: Router,
     private categoriaService: CategoriaService,
     private serieService: SerieService
     ) { }
  
   ngOnInit(): void {
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
    this.serieService.read().subscribe(series => {
      this.series = series
    })
   }


   criarAtividade(): void{
     this.atividade.serie = this.serieSelecionada
     this.atividade.materia = this.materiaSelecionada
     this.atividadeService.create(this.atividade).subscribe(() => {
       this.atividadeService.showMessage('Postagem criada!')
       this.router.navigate(['/atividades/crud'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/atividades/crud'])
   }
   
 }
 