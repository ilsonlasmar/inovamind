# Inovamind
Projeto exemplo de um Web crawler que capta informações do site http://quotes.toscrape.com/
A Aplicação Inovamind foi elaborado pensando no trabalho massivo do crawler em extrair informações de um determinado website. Pensando nisso foi utilizado o Sidekiq + Redis para execução do crawler em background e assim salvando as informações no MongoDB. Em toda nova consulta é gerado uma tarefa para o Sidekiq executar em background a tarefa.

Ao salvar as informações extraidas no website tive a preocupação de atualizar os registros já existentes, assim não criando registros duplicados
na base de dados. Como aumento de desempenho foi utilizado a serialização de objetos pela GEM Fast JSON API da Netflix.
Mais sobre performance: https://github.com/Netflix/fast_jsonapi/blob/master/performance_methodology.md

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











