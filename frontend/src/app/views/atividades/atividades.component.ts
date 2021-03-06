import { Categoria } from 'src/app/components/categoria/categoria.model';
import { CategoriaService } from './../../components/categoria/categoria.service';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Atividade } from 'src/app/components/atividade/atividade.model';
import { AtividadeService } from 'src/app/components/atividade/atividade.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  categorias: Categoria[]
  atividades: Atividade[] 
  materiaSelecionada = 'historia'

  constructor(private headerService: HeaderService, 
    private atividadeService : AtividadeService, 
    private matChipsModule:MatChipsModule, 
    private categoriaService:CategoriaService) { 
      headerService.headerData = {
        title: 'Atividades Adaptadas',
        icon: 'article',
        routeUrl: '/atividades'
    }
  }

  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividades => {
      this.atividades = atividades
    }),
    this.categoriaService.read().subscribe(categorias => {
      this.categorias = categorias
    })
  }

  
  
  selecionarMateria(atividade:any): void {
    this.materiaSelecionada = atividade
    //  this.botaoMateria = document.getElementById('materia')
    //  this.materiaSelecionada = this.botaoMateria.value()
 // this.atividades =  
  //this.atividades.filter(t=>t.materia ===atividade);
 
  }

}
  

