import { Curso } from "./curso.model";

export interface Usuario {
    matricula: number;
    nome: string;
    senha: string;
    Curso?: Curso;
}