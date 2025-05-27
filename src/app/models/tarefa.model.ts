export interface Tarefa{
    id?: string;
    titulo: string;
    descricao: string;
    limite: string;
    status: string;
    usuario: {
        matricula: number;
        nome: string | null;
        senha: string | null;
        curso: string | null;
    };
    disciplina: {
        id?: string;
        nome: string | null;
        curso?: string | null;
  };
}