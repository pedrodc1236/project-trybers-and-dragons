<h1 align="center"> Projeto Trybers And Dragons 💻 </h1>

<div align="center">
<img src=https://i.imgur.com/4qpRMwT.png width="200px">
</div>

## Tecnologia Utilizada

<a href="https://www.typescriptlang.org/">
<img 
     src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=fff&logoWidth=20"
     alt="Typescript"
/>
</a>

<h2 align="left"> Sobre: </h2>

<p> Uma estrutra de um Role Play Game, com criação de personagens e de batalhas, usando TypeScript e a Programação Orientada a Objetos e os princípios S.O.L.I.D
</p>

## Instalando o projeto localmente:
 
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em através do gmail: pedrodc1236@gmail.com 

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
  ```
  mkdir projetos
  ```
2. Entre no diretório que acabou de criar e depois clone o projeto:
  ```
  cd projetos
  ```
  ```
  git clone git@github.com:pedrodc1236/project-trybers-and-dragons.git
  ```
  
3. Acesse o diretório do projeto e depois utilize o comando **npm install** para instalar todas as dependências necessárias:

  ```
  cd project-trybers-and-dragons
  ```
  ```
  npm install
  ```
  
  - ✨ **Dica:** Caso queira utilizar _Docker_ para rodar os testes localmente e validar as funcionalidades, basta seguir as seguintes instruções:

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esse serviço irá inicializar um container chamado trybers_and_dragons.
  - A partir daqui você pode rodar o container trybers_and_dragons via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.
