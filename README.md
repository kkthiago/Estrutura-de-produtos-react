# Vitrine de Produtos Interativa 🛍️✨

<p align="center">
  <img src="https://img.shields.io/badge/React-19.1-blue.svg?logo=react" alt="React">
  <img src="https://img.shields.io/badge/Vite-7.1-purple.svg?logo=vite" alt="Vite">
  <img src="https://img.shields.io/badge/Emotion-11.14-pink.svg" alt="Emotion">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/version-0.1.0-blue" alt="Versão do Projeto">
  <img src="https://img.shields.io/badge/status-ativo-brightgreen" alt="Status do Projeto">
  <img src="https://img.shields.io/badge/Licença-MIT-green.svg" alt="Licença">
</p>

---

## ✨ Funcionalidades Principais

- **Componentização Limpa:** A aplicação é dividida em componentes reutilizáveis (`ListaDeProdutos`, `CardProduto`).
- **Estado Individual:** Cada botão de compra gerencia seu próprio estado ("adicionado" ou "não adicionado") graças ao hook customizado `useToggleBotao`, garantindo que a ação em um card não afete os outros.
- **Estilização Dinâmica:** O botão de compra altera sua cor com base no seu estado, utilizando as capacidades de props do Emotion.
- **Layout Flexível:** A vitrine de produtos é organizada em um layout de linha responsivo usando Flexbox.

---

## 💻 Tecnologias Utilizadas

- **React (v19.1)**: Biblioteca principal para a construção da interface de usuário.
- **Vite (v7.1)**: Ferramenta de build moderna e rápida para o ambiente de desenvolvimento.
- **Emotion (v11.14)**: Biblioteca para estilização CSS-in-JS, permitindo a criação de componentes estilizados e dinâmicos.
- **Custom Hooks**: Demonstração do `useState` para criar um hook reutilizável (`useToggleBotao`) para gerenciar a lógica do botão.

---

## ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [Node.js (v18 ou superior)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- Um gerenciador de pacotes como `npm` ou `yarn`.

---

## 🚀 Instalação e Configuração

Siga os passos abaixo para executar o projeto localmente:

1.  **Clone o repositório:**

    ```sh
    git clone https://github.com/seu-usuario/estrutura_react_produtos.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```sh
    cd estrutura_react_produtos
    ```

3.  **Instale as dependências:**

    ```sh
    npm install
    ```

---

## ▶️ Como Usar

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```sh
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (ou na porta indicada pelo Vite no seu terminal).

---

## 📄 Licença

Este projeto está sob a licença MIT.
