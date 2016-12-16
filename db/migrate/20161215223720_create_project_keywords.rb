class CreateProjectKeywords < ActiveRecord::Migration
  def change
    create_table :project_keywords do |t|
      t.integer :project_id, null: false
      t.integer :keyword_id, null: false

      t.timestamps null: false
    end
  end
end
