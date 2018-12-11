class Portfolio < ApplicationRecord
  ##VALIDATIONS
  validates :user_id, presence:true
  validates :league_id, presence:true
  ##RELATIONSHIPS
  belongs_to :user
  belongs_to :league
  has_many :holdings
end
