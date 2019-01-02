class Api::V1::LeaguesController < ApplicationController

  def index
    leagues = League.all - @user.leagues
    valid_leagues = leagues.select do |league|
      league.end_date > Date.today()
    end
    render json: valid_leagues, status: :ok
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
    league.expire_league
    if league.expired
      formatted_portfolios = league.portfolios.map do |portfolio|
        {id:portfolio.id,name: portfolio.name, username: portfolio.user.username, value: portfolio.current_balance}
      end
      render json: {league:league, portfolios:formatted_portfolios}, status: :ok
    else
      formatted_portfolios = league.portfolios.map do |portfolio|
        portfolio_value_and_changes = portfolio.total_portfolio_value_and_changes
        {id:portfolio.id,name: portfolio.name, username: portfolio.user.username, value: portfolio_value_and_changes["total_value"], total_change: portfolio_value_and_changes["total_change"]}
      end
      render json: {league:league, portfolios:formatted_portfolios}, status: :ok
    end
  end
  private

  def league_params
      params.require(:league).permit(:name,:start_balance,:end_date)
  end
  def portfolio_params
    params.require(:portfolio).permit(:name)
  end
end
