class Api::V1::StocksController < ApplicationController
  before_action :get_base
  def get_base
    @url="https://api.iextrading.com/1.0/"
  end
  def index
    url="https://api.iextrading.com/1.0/stock/market/collection/sector?collectionName=Health%20Care"
    results = JSON.parse(RestClient.get(url))
    formatted = results.map do |result|
      {"symbol":result["symbol"], "price":result["latestPrice"]}
    end
    render json: formatted, status: :ok
  end

  def recent_news
    new_url = "#{@url}/stock/market/news/last/5"
    results = JSON.parse(RestClient.get(new_url))
    formatted = results.map do |result|
      {"headline":result["headline"], "source":result["source"], "url":result["url"]}
    end
    render json: formatted, status: :ok
  end

end
