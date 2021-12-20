import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  postagens: Categoria[]
  displayedColumns = ['id', 'titulo', 'texto', 'action']

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.read().subscribe(postagens => {
      this.postagens = postagens
    })
  }

}