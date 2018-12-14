Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/users/leagues', to: 'users#leagues'
      get '/news/recent', to: 'stocks#recent_news'
      get '/stocks/tickers', to: 'stocks#tickers'
      resources :users
      resources :portfolios
      resources :leagues
      resources :holdings
      resources :auth, only: [:create]
      resources :stocks, only: [:index]

    end
  end
end
