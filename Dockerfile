FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y build-essential curl libpq-dev \
&& curl -sL https://deb.nodesource.com/setup_9.x | bash \
&& apt-get install nodejs -yq
# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -\
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn
    
RUN mkdir /inovamind
WORKDIR /inovamind
COPY Gemfile /inovamind/Gemfile
COPY Gemfile.lock /inovamind/Gemfile.lock
RUN bundle install
RUN yarn install
COPY . /inovamind
