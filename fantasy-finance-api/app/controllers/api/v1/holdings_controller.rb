class Api::V1::HoldingsController < ApplicationController
  def create
    holding = Holding.new(holding_params)
    total_value = holding.price_bought * holding.num_shares
    found_portfolio = Portfolio.find(holding.portfolio_id)
    ##Real time grab of portfolio current balance
    if (found_portfolio.current_balance > total_value) do
      holding.save
      render json: holding, status: :ok
    else
      render json: { error: 'Not enough cash boi' }, status: :not_acceptable
    end
  end

  private

  def holding_params
    params.require(:holding).permit(:price_bought,:num_shares,:ticker,:portfolio_id)
  end
end
