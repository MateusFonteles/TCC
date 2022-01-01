import { Postagem } from './postagem.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

    baseUrl = "http://localhost:3001/postagens"
 
  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient) { }
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] :['msg-success']
    })
  }

  create(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(this.baseUrl, postagem).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true);
    console.log(e)
    return EMPTY;
  }

  read(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
      );
  }

readById(id: number): Observable<Postagem>{
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Postagem>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

update(postagem: Postagem): Observable<Postagem>{
  const url = `${this.baseUrl}/${postagem.id}`
  return this.http.put<Postagem>(url, postagem).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
}

delete(id: number): Observable<Postagem>{
  const url = `${this.baseUrl}/${id}`;
  return this.http.delete<Postagem>(url).pipe(
    map((obj) => obj),
    catchError(e => this.errorHandler(e))
  );
}

}
function postagem<T>(baseUrl: string, postagem: any) {
  throw new Error('Function not implemented.');
}

