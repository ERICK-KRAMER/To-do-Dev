# TODO-DEV

## Descrição do Projeto

TODO-DEV é uma aplicação de gerenciamento de tarefas onde os usuários podem criar, mover e concluir tarefas. A aplicação é construída com React e utiliza UUID para gerar identificadores únicos para cada tarefa e usuário. As tarefas podem ser categorizadas por dificuldade e tipo (Web ou Mobile).

## Funcionalidades

- **Criação de Tarefas:** Os usuários podem criar novas tarefas especificando a descrição, dificuldade e categoria.
- **Movimentação de Tarefas:** As tarefas podem ser movidas entre as colunas "Todo", "In Progress" e "Completed".
- **Conclusão de Tarefas:** Tarefas em "In Progress" podem ser marcadas como concluídas e movidas para "Completed".
- **Atribuição de Usuários:** Cada tarefa é atribuída a um usuário específico (exemplo: Joana ou Matheus).

## Estrutura do Código

### Importações

<<<<<<< HEAD
- **Imagens dos usuários:** importadas de arquivos locais.
=======
- **Imagens dos usuários:**  importadas de arquivos locais.
>>>>>>> bdcf5da1d1694458ba431fd431a8009afd03067e
- **Componentes:** `Container` e `Task` são componentes personalizados importados.
- **Ícones:** Ícones `Check` e `ChevronsRight` são importados da biblioteca `lucide-react`.
- **Hooks do React:** `useRef` e `useState` são usados para gerenciamento de estado e referências.
- **UUID:** `uuidv4` é usado para gerar IDs únicos para tarefas e usuários.

### Tipos e Interfaces

- **TaskType:** Define a estrutura de uma tarefa, incluindo `id`, `task`, `difficult`, `category`, `user`, `completed`, e `date`.

### Dados Iniciais

- **Usuários:** Dois usuários são definidos com IDs e imagens únicas.

### Funções Principais

- **handleClick:** Cria uma nova tarefa com os dados inseridos e a adiciona ao estado `tasks`.
- **moveTaskToInProgress:** Move uma tarefa da lista "Todo" para "In Progress".
- **moveTaskToCompleted:** Move uma tarefa da lista "In Progress" para "Completed".
- **handleCompletedTodo:** Remove uma tarefa da lista "Completed".

### Renderização

A aplicação é dividida em três colunas principais, cada uma representada por um componente `Container`:
<<<<<<< HEAD

=======
>>>>>>> bdcf5da1d1694458ba431fd431a8009afd03067e
- **Create Task:** Formulário para criação de novas tarefas.
- **Todo:** Lista de tarefas a serem iniciadas.
- **In Progress:** Lista de tarefas em andamento.
- **Completed:** Lista de tarefas concluídas.

## Como Executar o Projeto

1. Clone o repositório.
   ```sh
   git clone <https://github.com/ERICK-KRAMER/To-do-Dev/tree/main>
<<<<<<< HEAD
   ```
2. Navegue até o diretório do projeto.
   ```sh
   cd nome-do-projeto
   ```
3. Instale as dependências.
   ```sh
   npm install
   ```
4. Execute a aplicação.
   ```sh
   npm run dev
   ```
=======
2. Navegue até o diretório do projeto.
   ```sh
   cd nome-do-projeto
3. Instale as dependências.
   ```sh
   npm install
4. Execute a aplicação.
   ```sh
   npm run dev 
>>>>>>> bdcf5da1d1694458ba431fd431a8009afd03067e
