class CreateKeywords < ActiveRecord::Migration
  def change
    create_table :keywords do |t|
      t.string :word, null: false

      t.timestamps null: false
    end

    add_index(:keywords, :word)
  end
end
