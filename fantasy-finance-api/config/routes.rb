Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/users/leagues', to: 'users#leagues'
      get '/users/profile', to: 'users#profile'
      get '/users/breakdown', to: 'users#breakdown'
      get '/stocks/sectors', to: 'stocks#sector_performance'
      get '/stocks/news', to: 'stocks#news'
      get '/stocks/gainers-losers', to: 'stocks#gainers_losers'
      get '/stocks/tickers', to: 'stocks#tickers'
      get '/stocks/chart/:id', to: 'stocks#chart'
      get '/stocks/price/:id', to: 'stocks#price'
      get '/stocks/logo/:id', to: 'stocks#logo'
      get '/portfolios/value/:id', to: 'portfolios#value'
      resources :users, only: [:create]
      resources :portfolios, only: [:create]
      resources :leagues, only: [:index,:create,:show]
      resources :holdings, only: [:create, :destroy]
      resources :auth, only: [:create]


    end
  end
end
