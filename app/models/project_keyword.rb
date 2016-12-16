class ProjectKeyword < ActiveRecord::Base
  belongs_to :project
  belongs_to :keyword
end
