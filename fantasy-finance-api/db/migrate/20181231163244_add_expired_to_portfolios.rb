class AddExpiredToPortfolios < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :expired, :boolean
  end
end
