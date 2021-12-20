import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-atividade-update',
  templateUrl: './atividade-update.component.html',
  styleUrls: ['./atividade-update.component.css']
})
export class AtividadeUpdateComponent implements OnInit {

  atividade: Atividade

  constructor(
    private atividadeService: AtividadeService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.atividadeService.readById(id).subscribe(atividade => {
      this.atividade = atividade
    });
  }

  updateAtividade(): void {
    this.atividadeService.update(this.atividade).subscribe(() => {
      this.atividadeService.showMessage('Atividade atualizada com sucesso!')
      this.router.navigate(["/atividades/crud"]);
    });
  }

  cancelar(): void {
    this.router.navigate(['/atividades/crud']);
  }

}

