# Inovamind
Projeto exemplo de um Web crawler que capta informações do site http://quotes.toscrape.com/

## Requirements
**O Projeto é todo executado via Docker.**

- Docker
- Docker Compose

## Installing and Setting
É necessário baixar as imagens utilizadas no projeto Inovamind e configuração inicial do mesmo.

### Installing Redis
* `docker-compose build`
* `docker-compose run --rm web bash -c "bundle exec rails db:create && bundle exec rails db:migrate && rails db:seed"`



