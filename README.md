# Etapa 1 - Frontend

## Descrição

Nesta primeira etapa do projeto, foi iniciado o desenvolvimento do frontend utilizando **Angular**. A estrutura inicial foi criada com foco na organização e separação das responsabilidades.

As entidades foram representadas como modelos (`models`) e os serviços responsáveis por fazer a comunicação com o backend foram gerados, aguardando implementação futura.

## Pré-requisitos

Para rodar o projeto é necessário ter instalado:

- Node.js (versão recomendada: 18+)
- Angular CLI (`npm install -g @angular/cli`)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/KauaBrenoQuerubino/tarefas-projecao-frontend.git
cd tarefas-projecao-frontend
```

2. Instale as dependências:

```bash
npm install
```

## Estrutura do Projeto

- `src/app/models/` → Contém os modelos de dados (interfaces) das entidades: Usuário, Tarefa, Disciplina e Curso.
- `src/app/services/` → Serviços Angular responsáveis pela comunicação com a API backend.

## Como executar

Execute o projeto localmente com o comando:

```bash
ng serve
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

---
## Etapa 2 - Prototipação e Casos de Uso

###  Design no Figma

O protótipo de telas do sistema foi desenvolvido no Figma, com base na ideia de facilitar a organização das tarefas.

🔗 Acesse o design:  
[ Protótipo no Figma](https://www.figma.com/design/ZD4IRkj7dlkTbNcE048tDu/TO-DO-LIST?node-id=0-1&t=L6qFahx4KQ1IRMtD-1)

### ✅ Casos de Uso

#### 👤 Perfil de Usuário: Estudante

- **Cadastrar Tarefa:** Estudante informa dados da tarefa e o sistema salva.
- **Excluir Tarefa:** Estudante remove uma tarefa registrada.
- **Listar Tarefas:** Sistema exibe tarefas do estudante com filtros.
- **Vincular Tarefa à Disciplina:** Estudante seleciona a disciplina; o sistema associa a tarefa.

## Etapa 3 - Entrega do projeto final

Entrega da versão final do projeto com todas as funcionalidades implementadas. Foram realizados testes, revisões de código e ao longo da semana serão feitas correções de bugs e ajustes pontuais conforme identificados.

> Esta é a base inicial do frontend. Nas próximas etapas serão adicionadas as telas, rotas, formulários e integração completa com o backend.

#
