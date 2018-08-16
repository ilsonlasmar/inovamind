require 'api_constraints'
require 'sidekiq/web'

Rails.application.routes.draw do
  root 'welcome#index'
  mount Sidekiq::Web => '/sidekiq'
  namespace :api, defaults: { format: :json } do
    scope module: :v1, constraints: ApiConstraints.new(version: 1) do
      get 'quotes/:search', to: 'quotes#search'
      post 'signin', to: 'authentication#signin'
    end
  end  
end
