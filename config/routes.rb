Rails.application.routes.draw do
  get 'quizzes/v1'
  
  get 'quizzes/v2'
  
  get 'quizzes/v3'

  root 'quizzes#thanks'
  
  resources :results, :only =>[:create, :index] do
  end
end
