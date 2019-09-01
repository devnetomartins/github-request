# github-request

> Sistema que realiza requests na api do github

## Passos para execução
>Certifique-se de ter o NodeJs e o git instalado no seu sistema operacional.

``` bash

# Clone o projeto
$ git clone https://github.com/devnetomartins/github-request.git

# Instale as dependencias
$ cd github-request && npm install

# Inicie o servidor
$ npm run serve

# Apos o sistema estar rodando no localhost fique atento ao endereço que será informado no terminal, ela será a rota que você utilizará para acessar o sistema!

# Para executar teste unitario
$ npm run test:unit

```
## Arquitetura

```
O projeto funciona da seguinte maneira:
O App.vue está com toda a lógica de frontend. Nele tem o campo para inserir o texto da pesquisa e um botão para acioná-la.
Ao clicar no botão "FIND" o texto inserido é validado e, caso não seja válido, uma mensagem é exibida informando ao usuário. Caso o contrário, será chamada a função dentro do arquivo user_info.js para realizar a request do tipo GET onde na mesma não necessidade de autenticação. O arquivo user_info.js (que está localizado dentro da pasta services) então requisita a API do Github (a configuração é feita  no arquivo config.js localizado no mesmo diretório). Após a request ter sido realizada, a API nos retorna um JSON caso haja esse username no github, sendo assim, será preenchida a tabela com todos os repositorios referente ao usuário informado e todas as stars de cada repositório, caso o username sejá inválido, não acontecerá nada.
```
