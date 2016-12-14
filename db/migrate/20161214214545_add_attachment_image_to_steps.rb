class AddAttachmentImageToSteps < ActiveRecord::Migration
  def self.up
    change_table :steps do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :steps, :image
  end
end
