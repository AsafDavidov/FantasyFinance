class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.float :current_balance
      t.integer :user_id
      t.integer :league_id

      t.timestamps
    end
  end
end
