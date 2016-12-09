# json.extract! project, :id, :title, :intro, :user

json.id project.id
json.title project.title
json.intro project.intro
# json.steps projects.steps do |step|
#   json.partial! 'api/steps/step' step: step
# end
json.user do
  json.id project.user.id
  json.username project.user.username
end
