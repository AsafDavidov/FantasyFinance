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
    if (unqiue_name && !found_league.expired)
      portfolio.save
      render json:{portfolios:@user.portfolios,leagues:@user.leagues}, status: :ok
    else
      if !unqiue_name
        render json: { message: 'This portfolio name has been taken in this League' }, status: :not_acceptable
      elsif found_league.expired
        render json: { message: 'This League has ended' }, status: :not_acceptable
      else
        render json: { message: 'Server Error' }, status: :not_acceptable
      end
    end

  end

  def value
    portfolio = Portfolio.find(params[:id])
    current_portfolio_value_and_changes = portfolio.total_portfolio_value_and_changes
    render json: {name: portfolio.name,total_value: current_portfolio_value_and_changes["total_value"], holdings_with_changes: current_portfolio_value_and_changes["holdings_with_changes"]}, status: :ok
  end
  private

  def portfolio_params
    params.require(:portfolio).permit(:name, :league_id, :current_balance)
  end
end
