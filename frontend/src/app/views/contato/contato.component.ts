import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(headerService: HeaderService) {
    headerService.headerData = {
      title: 'Contato',
      icon: 'email',
      routeUrl: '/contato'
  }
   }

  ngOnInit(): void {
  }

}
