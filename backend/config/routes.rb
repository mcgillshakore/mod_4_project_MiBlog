Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :users
resources :blogs
resources :likes
resources :comments

post '/login', to:'auth#login'
get '/check-login', to:'auth#check_loggin'
get '/logout', to:'auth#logout'
end
