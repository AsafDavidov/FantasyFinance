class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_balance, :end_date
  has_many :portfolios
end
