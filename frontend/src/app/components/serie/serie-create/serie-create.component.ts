import { Serie } from './../serie.model';
import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie-create',
  templateUrl: './serie-create.component.html',
  styleUrls: ['./serie-create.component.css']
})
export class SerieCreateComponent implements OnInit {

  serie: Serie = {
    nome: ''
  }
 
 
   constructor(private serieService: SerieService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarSerie(): void{
     this.serieService.create(this.serie).subscribe(() => {
       this.serieService.showMessage('Serie criada!')
       this.router.navigate(['/series/crud'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/series/crud'])
   }
   
 }
 