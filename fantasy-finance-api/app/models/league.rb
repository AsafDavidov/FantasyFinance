class League < ApplicationRecord
  ##VALIDATIONS
  validates :name, uniqueness: { case_sensitive: false }, presence:true
  validates :duration, presence:true
  has_one_attached :league_img
  ##RELATIONSHIPS
  has_many :portfolios
  has_many :users, through: :portfolios
end
