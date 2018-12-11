class Portfolio < ApplicationRecord
  belongs_to :user
  belongs_to :league
  has_many :holdings
end
