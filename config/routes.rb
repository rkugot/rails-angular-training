Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  post '/login', to: 'users#login'
  get '/users/:id/expenses', to: 'expenses#index'
  post '/users/:id/expense', to: 'expenses#create'
  get '/categories', to: 'expenses#categories'
  get '*unmatched_route', to: 'home#index'
end
