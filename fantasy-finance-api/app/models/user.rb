class User < ApplicationRecord
  ##VALIDATIONS
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }, presence:true
  # validates :first_name, presence:true
  # validates :last_name, presence:true
  ## RELATIONSHIPS
  has_many :portfolios
  has_many :leagues, through: :portfolios


  def biggest_rival
    all_rivals = self.leagues.map{|league|league.portfolios-self.portfolios}.flatten.map{|p|p.user_id}
    rival = User.find(all_rivals.max_by{|u|all_rivals.count(u)})
    return rival
  end

  def number_and_percentage_of_wins

  end

  def biggest_value_smallest_value_holdings

  end


  def biggest_winner_biggest_loser

  end
end
