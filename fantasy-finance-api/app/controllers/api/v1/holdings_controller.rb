class Api::V1::HoldingsController < ApplicationController

  def create
    holding = Holding.new(holding_params)
    total_value = holding.price_bought * holding.num_shares
    found_portfolio = Portfolio.find(holding.portfolio_id)
    ##Real time grab of portfolio current balance
    if (holding.valid? && found_portfolio.current_balance > total_value)
      found_portfolio.current_balance = found_portfolio.current_balance - total_value
      found_portfolio.save
      holding.save
      render json: @user.portfolios, status: :ok
    else
      if(!holding.valid?)
        render json: { message: 'Invalid Parameters' }, status: :not_acceptable
      elsif(!(found_portfolio.current_balance > total_value))
        render json: { message: 'Insufficient Funds' }, status: :not_acceptable
      else
        render json: { message: 'Incorrect' }, status: :not_acceptable
      end
    end
  end

  def destroy
    holding = Holding.find(params[:id])
    portfolio = Portfolio.find(holding.portfolio_id)
    url="https://api.iextrading.com/1.0/stock/#{holding.ticker}/price"
    price = RestClient.get(url).to_f
    total_value = (holding.num_shares * price).round(2)
    portfolio.current_balance = portfolio.current_balance + total_value
    holding.destroy
    portfolio.save
    render json: @user.portfolios, status: :ok
  end
  private

  def holding_params
    params.require(:holding).permit(:price_bought,:num_shares,:ticker,:portfolio_id)
  end
end
