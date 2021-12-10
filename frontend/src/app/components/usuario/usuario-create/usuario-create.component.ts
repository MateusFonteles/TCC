import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {
  usuario: Usuario = {
    nome: '',
    imagem: null,
    email: '',
    senha: ''
  }
 
 
   constructor(private usuarioService: UsuarioService, 
     private router: Router) { }
  
   ngOnInit(): void {
   }
 
   criarUsuario(): void{
     this.usuarioService.create(this.usuario).subscribe(() => {
       this.usuarioService.showMessage('Usuário criado!')
       this.router.navigate(['/usuarios'])
     })
     }
   
   cancelar(): void{
     this.router.navigate(['/usuarios'])
   }
}
