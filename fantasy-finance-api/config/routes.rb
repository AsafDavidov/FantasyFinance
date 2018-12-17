Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/users/leagues', to: 'users#leagues'
      get '/users/profile', to: 'users#profile'
      get '/stocks/news', to: 'stocks#recent_news'
      get '/stocks/tickers', to: 'stocks#tickers'
      get '/stocks/chart/:id', to: 'stocks#chart'
      get '/stocks/price/:id', to: 'stocks#price'
      resources :users
      resources :portfolios
      resources :leagues
      resources :holdings
      resources :auth, only: [:create]
      resources :stocks, only: [:index]

    end
  end
end
