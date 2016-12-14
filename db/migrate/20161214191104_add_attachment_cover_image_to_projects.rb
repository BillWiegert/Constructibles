class AddAttachmentCoverImageToProjects < ActiveRecord::Migration
  def self.up
    change_table :projects do |t|
      t.attachment :cover_image
    end
  end

  def self.down
    remove_attachment :projects, :cover_image
  end
end
