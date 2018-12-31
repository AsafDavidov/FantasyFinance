class AddExpiredToLeagues < ActiveRecord::Migration[5.2]
  def change
    add_column :leagues, :expired, :boolean, :null => false, :default => false
  end
end
