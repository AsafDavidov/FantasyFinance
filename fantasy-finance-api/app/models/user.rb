class User < ApplicationRecord
  ##VALIDATIONS
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }, presence:true
  # validates :first_name, presence:true
  # validates :last_name, presence:true
  ## RELATIONSHIPS
  has_many :portfolios
  has_many :leagues, through: :portfolios


  def configure_leagues
    unexpired_leagues = League.select{|league| !league.expired}

    # real check to test that a league has expired
    #leagues_that_expired = unexpired_leagues.select{|league|league.end_date < Date.today()}

    leagues_that_expired = unexpired_leagues.select{|league|league.id == 2}
    leagues_that_expired.each do |league|
      league.expire_league
    end
  end

  def biggest_rival
    all_rivals = self.leagues.map{|league|league.portfolios-self.portfolios}.flatten.map{|p|p.user_id}
    rival = User.find(all_rivals.max_by{|u|all_rivals.count(u)})
    return rival
  end

  # def number_and_percentage_of_wins
  #   ##find all users portfolios where that leagues has ended
  #   finished_portfolios = self.portfolios.select{|user_portfolio|Date.parse(user_portfolio.league.end_date.to_s)==Date.today}
  #   ##find historical value for each portfolio within each league
  #   finished_portfolios.map do |finished_portfolio|
  #       {total_value: finished_portfolio.historical_total_portfolio_value, id: finished_portfolio.id}
  #   end
  #   ## find max value portfolio for each league
  #
  #   ## return percentage of leagues in which the leading portfolio is current users portfolio
  #   finished_portfolios
  #   binding.pry
  #   puts "woop"
  # end
  #
  # def biggest_value_smallest_value_holdings
  #
  # end
  #
  #
  # def biggest_winner_biggest_loser
  #
  # end
end
