class UserSerializer < ActiveModel::Serializer
  attributes :username
  has_many :portfolios
  has_many :leagues, through: :portfolios
end
