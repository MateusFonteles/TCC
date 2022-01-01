import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria

  constructor(
    private categoriaService: CategoriaService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.categoriaService.readById(id).subscribe(categoria => {
      this.categoria = categoria
    });
  }

  updateCategoria(): void {
    this.categoriaService.update(this.categoria).subscribe(() => {
      this.categoriaService.showMessage('categoria atualizada com sucesso!')
      this.router.navigate(["/postagens"]);
    });
  }

  cancelar(): void {
    this.router.navigate(['/postagens']);
  }

}
