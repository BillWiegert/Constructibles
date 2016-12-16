class Keyword < ActiveRecord::Base
  has_many :project_keywords, dependent: :destroy
  has_many :projects, through: :project_keywords
end
