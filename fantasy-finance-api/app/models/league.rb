class League < ApplicationRecord
  ##VALIDATIONS
  validates :name, uniqueness: { case_sensitive: false }, presence:true
  validates :end_date, presence:true
  validate :end_date_cannot_be_in_the_past

  ##RELATIONSHIPS
  has_many :portfolios
  has_many :users, through: :portfolios

  ##IMAGE
  has_one_attached :league_img

  def end_date_cannot_be_in_the_past
    if end_date.present? && end_date < Date.today
      errors.add(:expiration_date, "can't be in the past")
    end
  end
end
