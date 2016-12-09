@projects.each do |project|
  json.set! project.id do
    json.id project.id
    json.title project.title
    json.user do
      json.id project.user.id
      json.username project.user.username
    end
  end
end
