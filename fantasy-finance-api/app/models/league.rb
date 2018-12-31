class League < ApplicationRecord
  ##VALIDATIONS
  validates :name, presence:true
  validates :end_date, presence:true
  validates :start_balance, numericality: {greater_than: 5000}
  validate :end_date_cannot_be_in_the_past


  ##RELATIONSHIPS
  has_many :portfolios
  has_many :users, through: :portfolios

  def end_date_cannot_be_in_the_past
    if end_date.present? && end_date < Date.today
      errors.add(:expiration_date, "can't be in the past")
    end
  end

  def expire_league
    p = self.portfolios.each do |league_portfolio|
      league_portfolio.expire_portfolio
    end
    self.update(expired: true)
  end
end
