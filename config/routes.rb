Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  post '/login', to: 'users#login'
  get '*unmatched_route', to: 'home#index'
end
