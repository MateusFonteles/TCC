import { HeaderService } from './../../components/template/header/header.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  public Editor = ClassicEditor;

  constructor(headerService:HeaderService) {
    headerService.headerData = {
      title: 'Sobre a autora',
      icon: 'emoji_people',
      routeUrl: '/sobre'
   }
   }

  ngOnInit(): void {
  }

}
