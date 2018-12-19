class Api::V1::PortfoliosController < ApplicationController
  def create
    byebug
    portfolio = Portfolio.new(portfolio_params)
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:name)
  end
end
