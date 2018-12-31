class Api::V1::PortfoliosController < ApplicationController
  def create
    portfolio = Portfolio.new(portfolio_params)
    portfolio.user_id = @user.id
    found_league=League.find(portfolio.league_id)
    unqiue_name=true
    found_league.portfolios.each do |i_portfolio|
      if (i_portfolio.name == portfolio.name)
        unqiue_name=false
      end
    end
    if unqiue_name
      portfolio.save
      render json:{portfolios:@user.portfolios,leagues:@user.leagues}, status: :ok
    else
      render json: { message: 'This portfolio name has been taken in this League' }, status: :not_acceptable
    end

  end

  def value
    current_portfolio_value_and_changes = Portfolio.find(params[:id]).total_portfolio_value_and_changes
    render json: {total_value: current_portfolio_value_and_changes["total_value"], holdings_with_changes: current_portfolio_value_and_changes["holdings_with_changes"]}, status: :ok
  end
  private

  def portfolio_params
    params.require(:portfolio).permit(:name, :league_id, :current_balance)
  end
end
