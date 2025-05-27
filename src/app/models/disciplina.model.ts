import { Curso } from "./curso.model";

export interface Disciplina {
    id?: number;
    nome: string;
    Curso: {
        id?: string;
        nome: string;
        duracao: string; 
    }
}