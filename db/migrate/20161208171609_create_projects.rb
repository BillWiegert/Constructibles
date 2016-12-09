class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :intro, null: false
      t.integer :user_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
