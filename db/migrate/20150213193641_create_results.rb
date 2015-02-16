class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.integer :score
      t.integer :participant_id
      t.string :class_year
      t.string :major
      t.string :gpa
      t.string :gender
      t.string :race
      t.string :income
      t.string :religion

      t.timestamps
    end
  end
end
