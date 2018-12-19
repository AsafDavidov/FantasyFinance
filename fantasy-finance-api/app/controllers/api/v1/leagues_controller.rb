class Api::V1::LeaguesController < ApplicationController

  def index
    leagues = League.all - @user.leagues
    render json: leagues, status: :ok
  end

  def create
    league = League.new(league_params)
    if (league.valid?)
      league.save
      portfolio = Portfolio.new({league_id: league.id,current_balance: league.start_balance, name: portfolio_params[:name], user_id: @user.id})
      if(portfolio.valid?)
        portfolio.save
        render json: {portfolios:@user.portfolios,leagues:@user.leagues}, status: :ok
      else
        render json: { message: 'Invalid Portfolio Name' }, status: :not_acceptable
      end
    else
      render json: { message: 'Invalid League Parameters' }, status: :not_acceptable
    end
  end

  def show
    league = League.find(params[:id])
    portfolios = league.portfolios
    render json: {league:league, portfolios:portfolios}, status: :ok
  end
  private

  def league_params
      params.require(:league).permit(:name,:start_balance,:end_date)
  end
  def portfolio_params
    params.require(:portfolio).permit(:name)
  end
end
