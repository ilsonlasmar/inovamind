# Inovamind
Projeto exemplo de um Web crawler que capta informações do site http://quotes.toscrape.com/

## Requirements
**O Projeto é todo executado via Docker.**

- Docker
- Docker Compose

## Installing and Setting
É necessário baixar as imagens utilizadas no projeto Inovamind e configuração inicial do mesmo.

### 1° Step
* `docker-compose build`
* `docker-compose run --rm web bash -c "bundle exec rails db:create && rails db:seed"`

### 2° Step - Let's Go!
* `docker-compose up`



