class Api::V1::StocksController < ApplicationController

  def index
    url="https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName=Health%20Care"
    results = JSON.parse(RestClient.get(url))
    formatted = results.map do |result|
      {"symbol":result["symbol"], "price":result["latestPrice"]}
    end
    render json: formatted, status: :ok
  end

end
