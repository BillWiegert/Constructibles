# json.extract! project, :id, :title, :intro, :user

json.id project.id
json.title project.title
json.intro project.intro
json.cover_image_url asset_path(project.cover_image.url)
json.steps project.steps do |step|
  json.partial! 'api/steps/step', step: step
end
json.user do
  json.id project.user.id
  json.username project.user.username
end
