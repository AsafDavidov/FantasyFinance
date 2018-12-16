class AddNameToPortfolios < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolios, :name, :string
  end
end
