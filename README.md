
# 🚀 StudyFlow Dashboard

**Status:** Em Desenvolvimento (MVP)
**Tecnologias:** React.js, Bootstrap

---

### ✨ Sobre o Projeto

O **StudyFlow Dashboard** é uma aplicação construída em **React.js** e estilizada com **Bootstrap**, com o objetivo de fornecer uma **visualização clara e um acompanhamento eficiente** de qualquer rotina de estudos.

Este projeto foca em transformar o progresso do aprendizado em *insights* visuais e acionáveis. **Totalmente responsivo**, o *dashboard* garante que o usuário tenha uma excelente experiência de acompanhamento de estudos em qualquer dispositivo (desktop, tablet ou mobile).

> 💬 **Destaque para Recrutadores:** A cada renderização, uma nova frase motivacional é exibida no topo, demonstrando o uso eficaz do ciclo de vida de componentes/Hooks do React para gerenciar e atualizar o estado da interface. O uso de Bootstrap agiliza o desenvolvimento de *layouts* profissionais e responsivos.

---

### 🎯 Funcionalidades e Destaques Técnicos

O dashboard centraliza informações cruciais para o acompanhamento do progresso:

#### 1. Visualização de Progresso (Gráfico de Pizza & Sumário)
* **Gráfico de Pizza:** Exibe o consumo total de aulas, onde cada "fatia" representa uma matéria distinta.
* **Sumário Detalhado:** Acompanha o gráfico, exibindo a cor de cada matéria, seu nome e, crucialmente, a **porcentagem de aulas concluídas**.
    * *Técnicas Demonstradas:* Manipulação de estado e propriedades para renderização de gráficos, cálculo de porcentagens e **garantia de responsividade** do componente visual.

#### 2. Gerenciamento de Matérias
* **Cartão de Adição de Matérias:** Uma interface simples para incluir novos conteúdos de estudo no dashboard. O *layout* do formulário é otimizado pelo Bootstrap.
    * *Técnicas Demonstradas:* Criação e gerenciamento de formulários em React, adição de novos itens a um *array* de estados.

#### 3. Projeção de Metas e Prazo
* **Cálculo de Aulas por Dia:** Um cartão de planejamento que calcula e exibe:
    1.  A quantidade total de aulas restantes.
    2.  A data limite definida pelo usuário para a conclusão.
    3.  A **média de aulas diárias** necessárias para cumprir a meta no prazo estipulado.
    * *Técnicas Demonstradas:* Lógica de cálculo de datas e progressão.

#### 4. Acompanhamento de Conclusão e Interação
* **Lista de Matérias com Controle de Progresso:** As matérias adicionadas são listadas em um *layout* organizado (usando classes Bootstrap).
    * Ao clicar no botão "Adicionar Aulas Concluídas", o contador de aulas restantes é **decrementado**.
    * Ao atingir **100% de conclusão** na matéria, o botão é **desativado**, sinalizando o fim do estudo daquele tópico.
    * *Melhoria Futura:* O recurso de exclusão de cartões será implementado em breve.
    * *Técnicas Demonstradas:* Gerenciamento de estado de itens individuais na lista e **componentização** da lógica de acompanhamento.

---

### 🛠️ Tecnologias Utilizadas

* `React.js` (com Hooks)
* `Bootstrap` (para estilização e responsividade)
* `JavaScript (ES6+)`
* `HTML5 / CSS3`

---

### 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para ter o **StudyFlow Dashboard** funcionando em sua máquina:

**Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/wesley-surt/StudyFlow-Dashboard.git
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd [StudyFlow-dashboard]
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou se preferir usar yarn
    # yarn install
    ```

4.  **Execute a aplicação:**
    ```bash
    npm start
    # ou
    # yarn start
    ```

O projeto será aberto automaticamente no seu navegador padrão em `http://localhost:5173/`.

---

### 👤 Autor

| [**Wesley Bruno de Souza**](https://www.linkedin.com/in/wesley-bruno-43888723b/) |
| :---: |
| Desenvolvedor Full-Stack |

**Conecte-se comigo:**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wesley-bruno-43888723b/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wesley-surt)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wesleybruno.adm@gmail.com)
