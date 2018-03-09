class CreateToDos < ActiveRecord::Migration[5.1]
  def change
    
    drop_table :to_dos

    create_table :to_dos do |t|
      t.string :to_do


      t.timestamps
    end
  end
end
