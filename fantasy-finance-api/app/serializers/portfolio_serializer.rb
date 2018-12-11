class PortfolioSerializer < ActiveModel::Serializer

  attributes :id, :ticker, :price_bought, :num_shares 
  has_many :holdings
end
