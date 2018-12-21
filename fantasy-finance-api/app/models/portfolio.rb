class Portfolio < ApplicationRecord
  ##VALIDATIONS
  validates :user_id, presence:true
  validates :league_id, presence:true
  ##RELATIONSHIPS
  belongs_to :user
  belongs_to :league
  has_many :holdings

  # add biggest gainer and biggest loser along with top5 holdings
  def total_portfolio_value_and_changes
    #create array with the portfolio's holding and the most up to date pricing
    tickers_and_current_prices = self.holdings.map do |holding|
      url="https://api.iextrading.com/1.0/stock/#{holding.ticker}/price"
      price = RestClient.get(url).to_f
      {ticker: holding.ticker, price: price}
    end.uniq{|holding| holding[:ticker]}
    portfolio_value = self.current_balance
    holdings_with_changes = self.holdings.map do |holding|
      #for total portfolio value
      holding_current_price = tickers_and_current_prices.find{|t_and_c| t_and_c[:ticker] == holding.ticker}[:price]
      holding_current_value = holding_current_price * holding.num_shares
      portfolio_value = (portfolio_value + holding_current_value).round(2)
      #for change in portfolio
      holding_percentage_change = (((holding_current_price-holding.price_bought)/holding.price_bought) * 100).round(2)
      {"ticker" => holding.ticker, "changes"=> holding_percentage_change, "value" => holding_current_value, "price_bought" =>holding.price_bought}
    end
    {"holdings_with_changes" =>holdings_with_changes, "total_value" =>portfolio_value }
  end


end
