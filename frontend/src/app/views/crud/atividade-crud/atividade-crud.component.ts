import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-atividade-crud',
  templateUrl: './atividade-crud.component.html',
  styleUrls: ['./atividade-crud.component.css']
})
export class AtividadeCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Atividade',
      icon: 'library_add',
      routeUrl: '/atividades'
    }
  }

  ngOnInit(): void {
  }

  navigateToAtividadeCreate(): void {
    this.router.navigate(['/atividades/create'])
  }
  
  navigateToPainel(): void {
    this.router.navigate(['/painel'])
  }

}

