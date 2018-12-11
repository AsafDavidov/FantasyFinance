class CreateHoldings < ActiveRecord::Migration[5.2]
  def change
    create_table :holdings do |t|
      t.string :ticker
      t.float :price_bought
      t.integer :num_shares
      t.integer :portfolio_id

      t.timestamps
    end
  end
end
