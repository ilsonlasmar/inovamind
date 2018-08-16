# Inovamind
Projeto exemplo de um Web crawler que capta informações do site http://quotes.toscrape.com/

A Aplicação Inovamind foi elaborada pensando no trabalho massivo do crawler em extrair informações de um determinado website. Pensando nisso foi utilizado o Sidekiq + Redis para execução do crawler em background e assim salvando as informações no MongoDB. Em toda nova consulta é gerado uma tarefa para o Sidekiq executar em background a tarefa.

Ao salvar as informações extraidas no website tive a preocupação de checar e atualizar os registros já existentes, assim não criando registros duplicados na base de dados. Abordando ainda desempenho, foi utilizado serialização de objetos através da Gem Fast JSON API da Netflix.
Mais sobre performance da Gem Fast Json API: https://github.com/Netflix/fast_jsonapi/blob/master/performance_methodology.md

A API da Aplicação foi elaborada para ser versionada caso aja a necessidade, com a utilização das Constraints. É passado a versão via cabeçalho e a aplicação redireciona para o consumo versionado solicitado.

A Autenticação é via JWT, onde é gerado um token e é feito a verificação sempre que necessário de áreas que precisam de autenticação para acesso. 

Na View foi utilizado React com o auxilio do Webpacker do Rails, foi escolhido React.js pela facilidade de manipulação da DOM e elaboração de requisições via Axios.



## Dependencies
* Rails 5.2
* Webpacker - React
* Sidekiq
* Redis
* Fast Json Api / Netflix
* Json Web Token - JWT
* HTTParty
* MongoDB

## Requirements
**O Projeto é todo executado via Docker.**

- Docker
- Docker Compose

## Installing and Setting
É necessário o download das imagens utilizadas no projeto Inovamind e configuração inicial do mesmo.

### 1° Step
* `docker-compose build`
* `docker-compose run --rm web bash -c "bundle exec rails db:create && rails db:seed"`

### 2° Step - Let's Go!
* `docker-compose up`











