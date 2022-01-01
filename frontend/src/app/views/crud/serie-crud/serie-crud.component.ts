import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-serie-crud',
  templateUrl: './serie-crud.component.html',
  styleUrls: ['./serie-crud.component.css']
})
export class SerieCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Séries',
      icon: 'school',
      routeUrl: '/series'
    }
  }

  ngOnInit(): void {
  }

  navigateToSerieCreate(): void {
    this.router.navigate(['/series/create'])
  }

}