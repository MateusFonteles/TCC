import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria

  constructor(
    private categoriaService: CategoriaService, 
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoriaService.readById(id).subscribe(categoria => {
      this.categoria = categoria
    })
  }

  deletarCategoria() {
    this.categoriaService.delete(this.categoria.id).subscribe(() => {
      this.categoriaService.showMessage('Produto excuído com sucesso')
      this.router.navigate(['/postagens'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/postagens'])
  }

}
