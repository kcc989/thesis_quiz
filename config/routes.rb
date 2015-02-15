Rails.application.routes.draw do
  get 'results/index'

  get 'quizzes/v1'
  
  get 'quizzes/v2'
  
  get 'quizzes/v3'
  
  resources :results, :only =>[:create, :index] do
  end
end
