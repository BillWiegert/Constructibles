# == Schema Information
#
# Table name: projects
#
#  id                       :integer          not null, primary key
#  title                    :string           not null
#  intro                    :string           not null
#  user_id                  :integer          not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  cover_image_file_name    :string
#  cover_image_content_type :string
#  cover_image_file_size    :integer
#  cover_image_updated_at   :datetime
#

class Project < ActiveRecord::Base
  validates :title, :intro, :user_id, presence: true

  has_attached_file :cover_image, default_url: "drawingboard.jpg"
  validates_attachment_content_type :cover_image, content_type: /\Aimage\/.*\Z/

  belongs_to :user
  has_many :steps, dependent: :destroy
  accepts_nested_attributes_for :steps

  has_many :project_keywords, dependent: :destroy
  has_many :keywords, through: :project_keywords
  accepts_nested_attributes_for :keywords

  def self.matches_filter(filter)
    filter = "%" + filter + "%"
    self.where("LOWER(title) LIKE LOWER(?)", filter)
  end

  # belongs_to :category
end
