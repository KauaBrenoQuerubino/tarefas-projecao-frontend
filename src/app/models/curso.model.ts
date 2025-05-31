export interface Curso{
    id?: string;
    nome: string;
    duracao: string;
    usuario: {
        matricula: number | null
    }
}