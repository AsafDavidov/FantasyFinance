class Api::V1::HoldingsController < ApplicationController
  def create
    holding = Holding.new(holding_params)
    byebug
  end

  private

  def holding_params
    params.require(:holding).permit(:price_bought,:num_shares,:ticker,:portfolio_id)
  end
end
