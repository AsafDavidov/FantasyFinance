class User < ApplicationRecord
  ##VALIDATIONS
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }, presence:true
  validates :first_name, presence:true
  validates :last_name, presence:true
  ## RELATIONSHIPS
  has_many :portfolios
  has_many :leagues, through: :portfolios

  def biggest_rival
    all_rivals = self.leagues.map{|league|league.portfolios-self.portfolios}.flatten.map{|p|p.user_id}
    if all_rivals.empty?
      return nil
    else
      rival = User.find(all_rivals.max_by{|u|all_rivals.count(u)})
      return rival.username
    end

  end

  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def number_and_percentage_of_wins
    #all of the users completed leagues
    finished_user_leagues = self.leagues.select{|user_league| user_league.expired }
    total_leagues = finished_user_leagues.size
    max_portfolios_for_each_league = finished_user_leagues.map do |finished_user_league|
      finished_user_league.portfolios.max_by{|portfolio|portfolio.current_balance}
    end
    number_of_won_portfolios = max_portfolios_for_each_league.select{|portfolio|portfolio.user_id==self.id}.size
    {wins: number_of_won_portfolios, total_leagues: total_leagues}
  end
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
