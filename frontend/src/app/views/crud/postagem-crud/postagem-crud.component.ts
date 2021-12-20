import { HeaderService } from '../../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-postagem-crud',
  templateUrl: './postagem-crud.component.html',
  styleUrls: ['./postagem-crud.component.css']
})
export class PostagemCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Postagens',
      icon: 'post_add',
      routeUrl: '/postagens'
    }
  }

  ngOnInit(): void {
  }

  navigateToPostagemCreate(): void {
    this.router.navigate(['/postagens/create'])
  }

}
