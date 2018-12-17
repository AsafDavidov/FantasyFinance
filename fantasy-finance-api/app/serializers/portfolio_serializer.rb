class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :current_balance, :user_id, :league_id, :name
end
