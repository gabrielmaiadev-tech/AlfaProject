# DevFlow

> Um espaço de trabalho para equipes de tecnologia planejarem projetos, organizarem tarefas e acompanharem o progresso sem perder o foco.

![CI planejada](https://img.shields.io/badge/CI-planejada-lightgrey)
[![Python](https://img.shields.io/badge/Python-3.12-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)

## Visão geral

O DevFlow é um dashboard full-stack de produtividade pensado para times de engenharia. A aplicação reúne projetos e tarefas em um só lugar, com foco em visibilidade do trabalho, priorização e colaboração. A base do projeto foi desenhada para evoluir com autenticação JWT, autorização por papéis (Admin e Usuário), filtros server-side e automação de qualidade.

## Demonstração

<!-- Substitua os caminhos abaixo pelos arquivos de mídia do projeto. -->

![Visão geral do dashboard](docs/screenshots/dashboard.png)

<!-- GIF de fluxo de criação e atualização de tarefas -->
![Fluxo de tarefas](docs/demos/task-workflow.gif)

## Stack e arquitetura

- **Frontend:** Angular 20, TypeScript e Tailwind CSS.
- **API:** Python 3.12, FastAPI e SQLAlchemy 2.
- **Persistência:** PostgreSQL 16.
- **Ambiente local:** Docker Compose.
- **Contrato da API:** OpenAPI/Swagger gerado pelo FastAPI.

> **Decisão de stack:** FastAPI é o backend deste projeto. Node.js/npm são usados pelo toolchain do Angular; manter Node e FastAPI como dois backends seria redundante. Para testes unitários da API Python, o padrão será `pytest` (Jest não executa código Python). Cypress cobre os fluxos E2E do frontend. CI com GitHub Actions será incluída na etapa de testes.

## Estrutura do repositório

**Monorepo recomendado:** frontend, API, infraestrutura e documentação evoluem juntos, facilitando mudanças coordenadas e execução local. Separe em repositórios distintos apenas se equipes, ciclos de release ou controles de acesso independentes justificarem esse custo.

```text
DevFlow/
├── .github/workflows/      # CI: lint e testes
├── backend/
│   ├── app/
│   │   ├── api/v1/          # Rotas e dependências HTTP
│   │   ├── core/            # Configuração, segurança e JWT
│   │   ├── models/          # Entidades SQLAlchemy
│   │   ├── repositories/    # Acesso a dados
│   │   ├── schemas/         # Contratos Pydantic
│   │   ├── services/        # Regras de negócio
│   │   └── main.py          # Aplicação FastAPI
│   ├── tests/               # pytest: unitários e integração
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/app/             # core, shared e features Angular
│   ├── cypress/e2e/         # Testes de ponta a ponta
│   ├── Dockerfile
│   ├── package.json
│   └── tailwind.config.js
├── docs/                    # Capturas, diagramas e decisões técnicas
├── docker-compose.yml
└── README.md
```

## Executar localmente

**Pré-requisitos:** Docker Engine e Docker Compose v2.

1. Clone o repositório e entre na pasta:

   ```bash
   git clone https://github.com/gabrielmaiadev-tech/AlfaProject.git
   cd AlfaProject
   ```

2. Inicie PostgreSQL, API e frontend:

   ```bash
   docker compose up --build
   ```

3. Acesse os serviços:

   - Frontend: <http://localhost:4200>
   - API: <http://localhost:8000>
   - Swagger UI: <http://localhost:8000/docs>
   - OpenAPI JSON: <http://localhost:8000/openapi.json>

Para encerrar, use `Ctrl+C` e execute `docker compose down`. Os dados do PostgreSQL ficam no volume `postgres_data`; para removê-los junto com os containers, use `docker compose down -v`.

As credenciais e a senha padrão do Compose são apenas para desenvolvimento local. Não as reutilize fora do ambiente local. Para personalizá-las, defina `POSTGRES_USER`, `POSTGRES_PASSWORD` e `POSTGRES_DB` no ambiente antes de subir os serviços.

## Qualidade e próximos passos

- [ ] Login seguro com JWT e hash de senha
- [ ] RBAC para Admin e Usuário
- [ ] Paginação, ordenação e filtros server-side
- [ ] Migrações de schema com Alembic
- [ ] Testes unitários da API com pytest
- [ ] Testes E2E com Cypress
- [ ] Pipeline GitHub Actions para lint e testes
- [ ] Interface responsiva com Tailwind CSS

## Commits

Use commits semânticos, por exemplo:

```text
feat(auth): adicionar login com JWT
fix(tasks): corrigir ordenação por prazo
refactor(api): separar serviços de tarefas
docs(readme): documentar execução local
```

## Licença

A licença do projeto deve ser definida antes da primeira publicação pública.