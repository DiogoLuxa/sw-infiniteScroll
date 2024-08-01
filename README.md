# Star Wars Data Explorer - Infinite Scroll

## Descrição

Este é um projeto que utiliza React, Axios, e React Query para explorar dados do universo Star Wars, como personagens e espécies. A aplicação consome a API pública do Star Wars (SWAPI) e implementa um Infinite Scroll para carregar os dados à medida que o usuário rola a página. A interface permite alternar entre a visualização de personagens e espécies, utilizando componentes estilizados e reutilizáveis.

## Tecnologias Utilizadas

-   **Vite**: Ferramenta de build e desenvolvimento rápido.
-   **React**: Biblioteca para construção da interface de usuário.
-   **Axios**: Biblioteca para fazer requisições HTTP.
-   **TanStack React Query**: Biblioteca para gerenciamento de estado e cache de dados.
-   **react-infinite-scroller**: Biblioteca que facilita a implementação de scroll infinito.
-   **Shadcn**: Biblioteca de componentes UI para estilização e construção de interfaces.
-   **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e eficiente.

## Funcionalidades

-   **Exploração de Dados do Star Wars**: Permite a visualização de listas de personagens ou espécies do universo Star Wars.

-   **Scroll Infinito**: Carrega mais dados conforme o usuário rola a página, utilizando `react-infinite-scroller` para uma experiência de navegação contínua.

-   **Alternância entre Tipos de Dados**: O usuário pode alternar entre visualização de "People" e "Species" com botões personalizados.

-   **Gerenciamento de Estado e Mutations**:

    -   Utiliza `useInfiniteQuery` para o gerenciamento do estado dos dados e paginação.
    -   As operações de carregamento e erro são gerenciadas e apresentadas de forma amigável ao usuário.

-   **Estilização Personalizada**: Componentes estilizados com Tailwind CSS e UI padrão dos botões do Shadcn para manter a consistência visual.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/DiogoLuxa/sw-infiniteScroll.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd sw-infiniteScroll
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Execução

Para iniciar o servidor de desenvolvimento e visualizar a aplicação localmente, execute:

```bash
npm run dev
```

## Scripts

-   **`npm run dev`**: Inicia o servidor de desenvolvimento.
-   **`npm run build`**: Cria uma versão otimizada para produção.
-   **`npm run lint`**: Executa o linting do código.
-   **`npm test`**: Executa os testes automatizados.

## Estrutura do Projeto

Aqui está a estrutura de arquivos do projeto:

```
src
├─ api
│  ├─ dataFetch.js
│  └─ queries.js
├─ assets
├─ components
│  ├─ Spinner
│  │  └─ Spinner.jsx
│  ├─ sw
│  │  ├─ InfiniteSwData.jsx
│  │  ├─ Person.jsx
│  │  └─ Specie.jsx
│  └─ ui
│     └─ button.jsx
├─ lib
│  └─ utils.js
├─ App.jsx
├─ index.css
└─ main.jsx
```

## Contato

-   **Nome**: Diogo Tadeu
-   **Email**: diogoluxa@outlook.com
-   **LinkedIn**: [Diogo Tadeu](https://www.linkedin.com/in/diogo-tadeu)

---
