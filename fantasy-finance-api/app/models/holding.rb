class Holding < ApplicationRecord
  validates :ticker, presence:true
  validates :num_shares, numericality: {greater_than: 0}
  validates :portfolio, presence:true
  belongs_to :portfolio
end
