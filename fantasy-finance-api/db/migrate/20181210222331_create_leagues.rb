class CreateLeagues < ActiveRecord::Migration[5.2]
  def change
    create_table :leagues do |t|
      t.string :name
      t.float :start_balance
      t.datetime :end_date

      t.timestamps
    end
  end
end
