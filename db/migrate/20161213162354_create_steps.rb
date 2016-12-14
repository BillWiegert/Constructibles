class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :order, null: false
      t.integer :project_id, null: false

      t.timestamps null: false
    end
  end
end
