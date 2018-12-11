class User < ApplicationRecord
  ##VALIDATIONS
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }, presence:true
  # validates :first_name, presence:true
  # validates :last_name, presence:true
  ## RELATIONSHIPS
  has_many :portfolios
  has_many :leagues, through: :portfolios
  ##IMAGE STORAGE
  has_one_attached :user_img
end
