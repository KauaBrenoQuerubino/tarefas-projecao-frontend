import { Curso } from "./curso.model";

export interface Disciplina {
  id?: number;
  nome: string;
  curso: {
    id?: string;
    nome: string;
    duracao: string;
    usuario: {
      matricula: number | null;
      nome?: string;
    };
  };
}
