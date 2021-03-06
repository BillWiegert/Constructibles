Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:index, :create, :show, :update, :destroy]
    resources :steps, only: [:create, :show, :update, :destroy]
  end
end
