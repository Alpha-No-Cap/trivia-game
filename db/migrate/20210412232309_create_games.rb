class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :score
      t.integer :streak
      t.string :category
      t.string :difficulty
      t.integer :user_id

      t.timestamps
    end
  end
end
