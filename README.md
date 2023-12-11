# Cadastro de cooperados

### 🎯Objetivo

Plataforma destinada ao cadastro de cooperados da cooperativa de crédito Unicred. Página desenvolvida usando Vuejs 3, com persistência dos dados em local storage e gerenciamento de estado com Pinia.

### 📑 Regras de negócio

<strong>Campos obrigatórios:</strong> <br>

- Nome <br>
- CPF / CNPJ <br>
- Perfil (Pessoa física/ Pessoa Jurídica) <br>
- Data de nascimento / Data de constituição

<strong>Campos opcionais:</strong> <br>

- Telefone de contato <br>
- Renda / Faturamento

<br>

<strong>Funcionamento:</strong> <br>

- Deverá ser possível cadastrar, editar, visualizar e remover um cooperado. <br>
- Validações necessárias no formulário de cadastro e edição de acordo com a obrigatoriedade dos campos. <br>
- Controle e persistência do gerenciamento dos usuários deverá acontecer todo no frontend. <br>
- Cada cadastro deve ter um identificador único (ID). <br>
- O sistema não pode permitir o cadastro ou edição de um CPF/CNPJ que já exista. <br>
- A persistência dos dados deve ser feita utilizando controle de estado ou local storage. <br>
- O campos CPF/CNPJ, Data de nascimento/Data de constituição, Renda/Faturamento devem ser dinâmicos de acordo com o perfil selecionado (Pessoa física/Pessoa jurídica).

### 💻 Tecnologias usadas

- <a href="https://vuejs.org/" target="_blank">Vuejs 3</a>
- <a href="https://vitejs.dev/" target="_blank">Vite</a>
- <a href="https://eslint.org/" target="_blank">ESLint</a> e <a href="https://prettier.io/" target="_blank">Prettier</a> (Organização do código)
- <a href="https://v3.router.vuejs.org/" target="_blank">Vue router 3</a> (Roteamento das páginas)
- <a href="https://vue3datepicker.com/" target="_blank">Vue 3 datepicker</a> (Campos de data do formulário)
- <a href="https://beholdr.github.io/maska/?ref=madewithvuejs.com#/" target="_blank">Maska</a> (Máscara de campos como telefone e CPF/CNPJ)
- <a href="https://pinia.vuejs.org/" target="_blank">Pinia</a> (Gerenciamento de estado)
- <a href="https://sweetalert2.github.io/" target="_blank">Swwet alert 2</a> (Alertas na aplicação)
- <a href="https://www.npmjs.com/package/uuidv4" target="_blank">uuidv4</a> (Geração de ID dos usuários)
- <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a> (Tipagem dos dados)
- <a href="https://www.dicebear.com/" target="_blank"> DiceBear</a> (Geração de avatares pela inicial dos usuário)

### 🔊 Informações adicionais

- Esse projeto possui um protótipo feito em Figma para maior facilidade no desenvolvimento, acesse clicando no ícone do Figma abaixo <br> <a href="https://www.figma.com/file/IgicL1zhCPTtmGxUuJQisU/Untitled?type=design&node-id=0-1&mode=design" target="_blank"><img src="https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png" width="50" height="50"></a>
- Esse projeto possui um deploy em produção no Netlify acesse clicando no ícone do Netlify abaixo <br> <a href="https://cadastro-cooperados.netlify.app/" target="_blank"><img src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png" width="40" height="40"></a>

### ⚙️ Como rodar o projeto

- 1 - Clone esse repositório <br>
  <code>$ git clone https://github.com/emilyjuly/cadastro-cooperados.git</code>
- 2 - Instale as dependências <br>
  <code>$ npm install</code>
- 3 - Execute a aplicação <br>
  <code>$ npm run dev</code>

### 🔑 Atalhos

- Visualizar detalhes de cada perfil:
  Clique no nome do usuário em cima do card <br>
  ![Alt text](image-1.png) <br>
- Para voltar para a página de usuários: Clique na logo da aplicação na parte superior da página <br>
  ![Alt text](image-2.png) <br> ou no botão de voltar que existe na parte superior das telas <br>
  ![Alt text](image-3.png)
