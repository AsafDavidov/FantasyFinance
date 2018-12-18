class Api::V1::LeaguesController < ApplicationController

  def index
    leagues = League.all - @user.leagues
    render json: leagues, status: :ok
  end
end
