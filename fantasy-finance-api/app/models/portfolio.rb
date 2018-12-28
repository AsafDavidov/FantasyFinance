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
      url="https://api.iextrading.com/1.0/stock/#{holding.ticker}/quote?filter=companyName,latestPrice"
      result = JSON.parse(RestClient.get(url))
      {name: result["companyName"], ticker: holding.ticker, price: result["latestPrice"]}
    end.uniq{|holding| holding[:ticker]}
    portfolio_value = self.current_balance
    holdings_with_changes = self.holdings.map do |holding|
      #for total portfolio value
      holding_current_price = tickers_and_current_prices.find{|t_and_c| t_and_c[:ticker] == holding.ticker}[:price]
      holding_current_name = tickers_and_current_prices.find{|t_and_c| t_and_c[:ticker] == holding.ticker}[:name]
      holding_current_value = holding_current_price * holding.num_shares
      portfolio_value = (portfolio_value + holding_current_value).round(2)
      #for change in portfolio
      holding_percentage_change = (((holding_current_price-holding.price_bought)/holding.price_bought) * 100).round(2)
      {"id"=>holding.id,"name" =>holding_current_name, "ticker" => holding.ticker, "num_shares" =>holding.num_shares, "changes"=> holding_percentage_change, "value" => holding_current_value.round(2), "price_bought" =>holding.price_bought}
    end
    total_portfolio_change = (((portfolio_value-self.league.start_balance)/self.league.start_balance)*100).round(2)
    {"holdings_with_changes" =>holdings_with_changes, "total_value" =>portfolio_value, "total_change" => total_portfolio_change}
  end

end
