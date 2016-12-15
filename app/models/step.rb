# == Schema Information
#
# Table name: steps
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  body               :text             not null
#  order              :integer          not null
#  project_id         :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Step < ActiveRecord::Base
  validates :title, :body, :order, presence: true

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :project
end
