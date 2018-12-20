class Portfolio < ApplicationRecord
  ##VALIDATIONS
  validates :user_id, presence:true
  validates :league_id, presence:true
  ##RELATIONSHIPS
  belongs_to :user
  belongs_to :league
  has_many :holdings

  def total_portfolio_value
    tickers_and_current_prices = self.holdings.map do |holding|
      url="https://api.iextrading.com/1.0/stock/#{holding.ticker}/price"
      price = RestClient.get(url).to_f
      {ticker: holding.ticker, price: price}
    end.uniq{|holding| holding[:ticker]}
    portfolio_value = self.current_balance
    self.holdings.each do |holding|
      holding_current_price = tickers_and_current_prices.find{|t_and_c| t_and_c[:ticker] == holding.ticker}[:price]
      portfolio_value = portfolio_value + (holding_current_price * holding.num_shares)
    end
    portfolio_value
  end
end
