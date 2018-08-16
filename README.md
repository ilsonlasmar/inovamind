# Inovamind
Projeto exemplo de um Web crawler que capta informações do site http://quotes.toscrape.com/

## Dependencies
* Rails 5.2
* Webpacker - React
* Sidekiq
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

## Usage
O Projeto da Inovamind é 






