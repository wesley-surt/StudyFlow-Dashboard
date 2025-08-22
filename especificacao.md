# Especificações do Projeto

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| A aplicação deve coletar o nome do usuário e exibí-lo junto a uma mensagem de cunho inspirador, motivacional, ao entrar na página. | Baixa | Wesley Bruno |
|RF-002| A mensagem que aparecerá junto ao nome do usuário do RF-001 deve ter um conteúdo diferente a cada acesso. | Baixa | Wesley Bruno |
|RF-003| A aplicação deve exibir quantas aulas faltam para finalizar cada unidade de aprendizado (matéria). | Alta | Wesley Bruno |
|RF-004| A informaçõe da RF-003 deve ser exibida num gráfico de barras, comparando todas as unidades de aprendizado. | Alta | Wesley Bruno |
|RF-005| A aplicação deve exibir em um gráfico de anel, com porcentagem, quantas aulas faltam para acabar todas as matérias. | Alta | Wesley Bruno |
|RF-006| A aplicação deve exibir e evidenciar qual matéria está sendo a mais estudada e qual está sendo a menos estudada. | Média | Wesley Bruno |
|RF-007| A aplicação deve fornecer a possibilidade do usuário escolher entre alguns tons de tema de fundo. | Baixa | Wesley Bruno |
|RF-008| A aplicação deve permitir que o usuário estabeleça um período de início e fim para a conclusão dos estudos das matérias adicionadas. | Alta | Wesley Bruno |
|RF-009| A aplicação deve permitir a adição, edição e exclusão de unidades de estudos (matérias). | Alta | Wesley Bruno |
|RF-010| A aplicação deve atualizar automaticamente os gráficos e demais informações sempre que um novo dado for inserido ou modificado. | Alta | Wesley Bruno |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Usabilidade: os gráficos da aplicação devem ter animação. | Baixa |
|RNF-002| Usabilidade: a interface deve ser intuitiva, permitindo que um usuário adicione uma nova matéria em até 3 cliques. | Alta |
|RNF-003| Desempenho: os gráficos devem ser renderizados em menos de 1.5 segundo após o carregamento dos dados. |
|RNF-004| Compatibilidade: a aplicação deve ser compatível com as versões recentes dos navegadores Chrome, Firefox e Safari. | Alta |
|RNF-005| Confiabilidade: os dados de progresso do usuário devem ser salvos automaticamente a cada nova inserção de dados ou modificação para evitar perda. | Alta |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação deve ser construida usando React e Bootstrap. |
|02| A aplicação deve usar IA para gerar as mensagens diferentes a cada acesso do RF-002. |
|03| O backend da aplicação deve ser construída usando SQLite e Python. |
|04| O login na aplicação deve ser feito pelo sistema de login do google gmail. |

