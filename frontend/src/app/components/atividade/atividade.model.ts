import { Serie } from './../serie/serie.model';
import { Categoria } from './../categoria/categoria.model';
export interface Atividade {
    id?: number
    titulo:string
    serie: Serie
    materia: Categoria
    imagem: string
    descricao: string
    autor: string
}
