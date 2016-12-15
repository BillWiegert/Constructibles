json.extract! step, :id, :title, :body, :order, :image, :project_id
json.image_url asset_path(step.image.url)
