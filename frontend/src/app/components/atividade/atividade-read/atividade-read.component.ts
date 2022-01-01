import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividade.model';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-atividade-read',
  templateUrl: './atividade-read.component.html',
  styleUrls: ['./atividade-read.component.css']
})
export class AtividadeReadComponent implements OnInit {

  atividades: Atividade[]
  displayedColumns = ['id', 'imagem', 'titulo', 'materia', 'serie', 'descricao', 'action']

  constructor(private atividadeService: AtividadeService) { }

  ngOnInit(): void {
    this.atividadeService.read().subscribe(atividades => {
      this.atividades = atividades
    })
  }

}
