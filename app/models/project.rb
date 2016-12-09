# == Schema Information
#
# Table name: projects
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  intro      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Project < ActiveRecord::Base
  validates :title, :intro, :user_id, presence: true
  
  belongs_to :user
  # belongs_to :category
  # has_many :steps
end
