class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
  validates :first_name, presence:true
  validates :last_name, presence:true

  has_many :portfolios
  has_many :leagues, through: :portfolios
end
